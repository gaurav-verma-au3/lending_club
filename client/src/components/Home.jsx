import React from "react";
import Search from "./Search";
import Widget from "./Widget";
const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-5">
          <Widget />
        </div>
        <div className="col-7">
          <div className="row">
            <div className="col-12">
              <Search />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
