import React, { useState, useEffect } from "react";
import { API_ORIGIN } from "../config";
import WidgetTile from "./WidgetTile";
import LoadingSpinner from "./LoadingSpinner";

const Widget = () => {
  const [widgetCount, setWidgetCount] = useState(10);
  const [widgetsData, setWidgetsData] = useState(null);
  useEffect(() => {
    const url = `${API_ORIGIN}/widgets/top/${widgetCount}`;
    fetch(url)
      .then(data => data.json())
      .then(result => {
        setWidgetsData(result);
      });
  }, [widgetCount]);
  return (
    <div className="container-fluid mt-4">
      <div className="d-flex  align-items-center">
        <h6 className="m-0 mx-auto">Widget Count</h6>
        <select
          className="custom-select w-25"
          onChange={e => {
            setWidgetCount(e.target.value);
          }}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </div>

      {widgetsData ? (
        <WidgetTile widgetsData={widgetsData} />
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default Widget;
