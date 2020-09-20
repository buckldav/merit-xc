import React from 'react';
import axios from 'axios';
import './Results.css';
const SHEET = {
  ID: "1hLjYIGzbdt4j0PWATLJ3fKjzfErx4_yaDaHxqKxf8jw",
  SHEET: "5ks"
}

class Results extends React.Component {
  state = {
    results: null
  }

  componentDidMount() {
    axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET.ID}/values/${SHEET.SHEET}?key=${process.env.REACT_APP_API_KEY}`)
      .then(res => {
        const results = res.data.values;
        Array.from(results).forEach(row => {
          let min = { time: "59:59:00", i: -1 };
          Array.from(row).forEach((data, i) => {
            if (data.split(":").length === 3) {
              if (new Date().setHours(0, ...min.time.split(":")) > new Date().setHours(0, ...data.split(":"))) {
                min = { time: data, i }
              }
            }
            if (i === row.length - 1 && min.i > -1) {
              row[min.i] = {"time": min.time, "pr": true}
            }
          })
        });
        this.setState({ results: res.data.values })
      })
  }

  render() {

    return (
      <article>
        <h4>Results</h4>
        <div className="table-container">
          <table>
            {this.state.results ? this.state.results.map((val, i) => (
              <tr>{i === 0 ? 
                val.map(val => <th>{val !== "Gender" && val !== "Grade" ? val : null}</th>) : 
                val.map(val => val.pr ? <td className="pr">{val.time}</td> : <td>{val}</td>)}
              </tr>
            )) : <p>Loading...</p>}
          </table>
        </div>
      </article>
    )
  }
}

export default Results