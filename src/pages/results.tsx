// @ts-nocheck
import React, { useEffect, useState } from "react";
import { Box, Heading } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/color-mode";
import styles from "../styles/results.module.css";
import { Result, ResultsProps, Filter } from "../types/results";
import { Select } from "@chakra-ui/select";
import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";

const SHEET = {
  ID: "1hLjYIGzbdt4j0PWATLJ3fKjzfErx4_yaDaHxqKxf8jw",
};

const DEFAULT_SHEET = "2023 5ks";
const DEFAULT_FILTER = "all";

function resultFilter(filter: Filter | null, row: Array<Result>) {
  return filter ? row[filter.i].time.includes(filter.data) : true;
}

async function getSheetData(sheet: string, api_key: string | undefined) {
  if (!sheet) return;

  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${SHEET.ID}/values/${sheet}?key=${api_key}`
  );
  const json = await response.json();
  const results = Array<Array<Result>>();
  Array.from(json.values).forEach((row) => {
    let min: Result = { time: "59:59:00", i: -1 };
    let resultRow = new Array<Result>();
    Array.from(row as string[]).forEach((data, i) => {
      if (
        data.split(":").length === 3 &&
        new Date().setHours(
          0,
          ...min.time.split(":").map((val) => parseInt(val))
        ) >
          new Date().setHours(0, ...data.split(":").map((val) => parseInt(val)))
      ) {
        min = { time: data, i };
      }

      resultRow.push({ time: data, i });

      if (i === 1 || i === 2) {
        resultRow[i] = { gg: data, ...resultRow[i] };
      }
      if (i === row.length - 1 && min.i > -1) {
        resultRow[min.i] = { time: min.time, pr: true, i };
      }
    });
    results.push(resultRow);
  });

  return results;
}

export async function getServerSideProps({ query }) {
  const sheet = query.sheet || DEFAULT_SHEET;
  return {
    props: {
      sheet,
      results: await getSheetData(sheet, process.env.API_KEY),
      apiKey: process.env.API_KEY,
    },
  };
}

const Results = (props: ResultsProps) => {
  const [results, setResults] = useState(props.results);
  const [sheet, setSheet] = useState(props.sheet);
  const [year, setYear] = useState<Filter | null>(null);
  const [grade, setGrade] = useState<Filter | null>(null);

  const router = useRouter();

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSheet = event.target.value;
    router.push("results", { query: { sheet: newSheet } });
    setYear(null);
    setGrade(null);
    setSheet(newSheet);
  };

  const onYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === DEFAULT_FILTER) {
      setYear(null);
    } else {
      const i = 4;
      setYear({
        i,
        data: event.target.value,
      });
    }
  };

  const onGradeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === DEFAULT_FILTER) {
      setGrade(null);
    } else {
      const i = 2;
      setGrade({
        i,
        data: event.target.value,
      });
    }
  };

  useEffect(() => {
    if (props.apiKey) {
      const getResults = async () =>
        setResults(await getSheetData(sheet, props.apiKey));
      getResults();
    }
  }, [sheet, props.apiKey]);

  let counterM = 1;
  let counterF = 1;

  const getResultsTableHead = () => {
    if (results && results[0]) {
      return (
        <tr>
          {results[0].map((val, j) => (
            <>
              {val.gg ? (
                <Box
                  as="th"
                  key={val.gg + j}
                  className={styles.gg}
                  bg={useColorModeValue("white", "blue.900")}
                ></Box>
              ) : (
                <Box
                  as="th"
                  key={val.time + j}
                  bg={useColorModeValue("white", "blue.900")}
                >
                  {val.time}
                </Box>
              )}
            </>
          ))}
        </tr>
      );
    } else {
      return null;
    }
  };

  const getResultsTableBody = () =>
    results?.map((row, i) =>
      i > 0 && resultFilter(year, row) && resultFilter(grade, row) ? (
        <>
          {row[1].gg === "F" && counterM !== 1 && counterF === 1 && (
            <Box as="tr" key={"space" + i}>
              <td>&nbsp;</td>
            </Box>
          )}
          <Box as="tr" key={JSON.stringify(row) + i}>
            {row.map((val, j) => {
              return (
                <>
                  {val.gg ? (
                    <td key={val.gg + j} className={styles.gg}>
                      {val.gg}
                    </td>
                  ) : val.pr ? (
                    <Box
                      as="td"
                      key={val.time + j}
                      color={
                        row.length > 4 && !sheet?.includes("Records")
                          ? useColorModeValue("brand.600", "brand.200")
                          : undefined
                      }
                      fontWeight="bold"
                    >
                      {val.time}
                    </Box>
                  ) : (
                    <Box
                      as="td"
                      key={val.time + j}
                      bg={useColorModeValue("white", "blue.900")}
                    >
                      {j === 0 ? (
                        <>
                          <span className={styles.number}>
                            {row[1].gg === "M" ? counterM++ : counterF++}.
                          </span>{" "}
                          {val.time}
                        </>
                      ) : (
                        val.time
                      )}
                    </Box>
                  )}
                </>
              );
            })}
          </Box>
        </>
      ) : null
    );

  return (
    <article>
      <form>
        <Select
          defaultValue={props.sheet}
          onChange={onChange}
          mx="auto"
          mb="4"
          maxWidth={400}
        >
          <optgroup label="Race Results">
            <option value="2023 5ks">2023 Results</option>
            <option value="2023 Junior High">2023 Jr. High Results</option>
            <option value="2022 5ks">2022 Results</option>
            <option value="2022 Junior High">2022 Jr. High Results</option>
            <option value="2021 5ks">2021 Results</option>
            <option value="2021 Junior High">2021 Jr. High Results</option>
            <option value="2020 5ks">2020 Results</option>
          </optgroup>
          <optgroup label="Records and Time Trials">
            <option value="5k Records Boys">5k Boys All-Time</option>
            <option value="5k Records Girls">5k Girls All-Time</option>
            <option value="Spring Canyon TT">Spring Canyon Time Trial</option>
          </optgroup>
        </Select>
      </form>
      <Heading as="h2" fontSize="lg" textAlign="center" mb="4">
        {sheet}
      </Heading>
      <Flex alignItems="center" justifyContent="center" gridGap="3" mb="4">
        <Heading size="sm">Filters</Heading>
        {(sheet.includes("Records") || sheet.includes("TT")) && (
          <Select
            value={year ? year.data : DEFAULT_FILTER}
            onChange={onYearChange}
            maxWidth={120}
            fontSize="sm"
          >
            <optgroup label="Year">
              <option value={DEFAULT_FILTER}>All Years</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
            </optgroup>
          </Select>
        )}
        <Select
          value={grade?.data || DEFAULT_FILTER}
          onChange={onGradeChange}
          maxWidth={120}
          fontSize="sm"
        >
          <optgroup label="Grade">
            <option value={DEFAULT_FILTER}>All Grades</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </optgroup>
        </Select>
      </Flex>

      <Box className={styles.results}>
        <table>
          <thead>{getResultsTableHead()}</thead>
          <tbody>{getResultsTableBody()}</tbody>
        </table>
      </Box>
      <p style={{ textAlign: "center", textIndent: "0" }}>
        <small>
          <em>** Began tracking data in Fall 2020</em>
        </small>
      </p>
    </article>
  );
};

export default Results;
