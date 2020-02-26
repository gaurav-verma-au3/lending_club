import React, { useState, useEffect } from "react";
import { API_ORIGIN } from "../config";
import GraphTile from "./GraphTile";
import LoadingSpinner from "./LoadingSpinner";

const Graph = () => {
  const [data, setData] = useState(null);
  const [year, setYear] = useState(null);
  const [allYears, setAllYears] = useState(null);
  const [first, setFirst] = useState(true);
  useEffect(() => {
    const url = `${API_ORIGIN}/graphs/years`;

    fetch(url)
      .then(data => data.json())
      .then(result => setAllYears(result));
  }, []);

  useEffect(() => {
    if (year) {
      setData(null);
      setFirst(false);
      const url = `${API_ORIGIN}/graphs/${year}`;
      fetch(url)
        .then(data => data.json())
        .then(result => setData(result));
    }
  }, [year]);

  return (
    <div className="container-fluid">
      <div className="row mt-5">
        <div className="col-6">
          <h6>Graph</h6>
        </div>
        <div className="col-6">
          <select
            className="custom-select"
            defaultValue="choose.."
            onChange={e => {
              setYear(e.target.value);
            }}
          >
            <option>Choose</option>

            {allYears ? (
              allYears.map((yr, i) => {
                return (
                  <option key={i + 563} value={yr}>
                    {yr}
                  </option>
                );
              })
            ) : (
              <option disabled>Loading</option>
            )}
          </select>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12 mt-5 d-flex justify-content-center ">
          {first ? <h1>select year...</h1> : <GraphTile data={data} />}
        </div>
      </div>
    </div>
  );
};

export default Graph;
