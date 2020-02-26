import React from "react";
import { Link } from "react-router-dom";

const WidgetTile = ({ widgetsData }) => {
  return (
    <div className="container-fluid m-0">
      <div className="row mt-3">
        {widgetsData
          ? widgetsData.map(val => {
              return (
                <Link to={`user/${val.member_id}`} className="col-12">
                  <div className="alert alert-secondary shadow shadow-sm">
                    <h6>Member Id : {val.member_id}</h6>
                    <h6>Loan Amount : {val.loan_amnt}</h6>
                    <h6>Funded : {val.funded_amnt_inv}</h6>
                    <small>{val.desc}</small>
                  </div>
                </Link>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default WidgetTile;
