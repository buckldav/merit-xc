import React, { useEffect, useState } from "react";
import { Box, Heading } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/color-mode";
import styles from "../styles/results.module.css";
import { Result, ResultsProps } from "../types/results";
import { Select } from "@chakra-ui/select";

const SHEET = {
  ID: "1hLjYIGzbdt4j0PWATLJ3fKjzfErx4_yaDaHxqKxf8jw",
};

const DEFAULT_SHEET = "2021 5ks";

async function getSheetData(sheet: string, api_key: string | undefined) {
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

export async function getStaticProps() {
  return {
    props: {
      results: await getSheetData(DEFAULT_SHEET, process.env.API_KEY),
      apiKey: process.env.API_KEY,
    },
  };
}

const Results = (props: ResultsProps) => {
  const [results, setResults] = useState(Array<Array<Result>>());
  const [sheet, setSheet] = useState(DEFAULT_SHEET);

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSheet(event.target.value);
  };

  useEffect(() => {
    console.log(process.env.API_KEY);
    setResults(props.results);
  }, []);

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
    results.map((row, i) =>
      i > 0 ? (
        <>
          {row[1].gg === "F" && counterM !== 1 && counterF === 1 && (
            <Box as="tr" key={"space" + i}>
              <td>&nbsp;</td>
            </Box>
          )}
          <Box as="tr" key={i}>
            {row.map((val, j) => (
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
                      row.length > 4 && !sheet.includes("Records")
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
            ))}
          </Box>
        </>
      ) : null
    );

  return (
    <article>
      <form>
        <Select
          defaultValue={DEFAULT_SHEET}
          onChange={onChange}
          mx="auto"
          mb="4"
          maxWidth={400}
        >
          <optgroup label="Race Results">
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
