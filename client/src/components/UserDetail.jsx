import React from "react";

const UserDetail = ({ val }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center mt-5">
          <div className="col-md-6 col-sm-6">
            <h4>Member Id : {val.member_id}</h4>
            <hr />
            <div className="row">
              <div className="col-6">
                <h6>Loan Amount : {val.loan_amnt}</h6>
                <h6>
                  Payment Status :{" "}
                  <span
                    className={`${
                      val.loan_status === "Fully Paid"
                        ? "text-success"
                        : "text-danger"
                    }`}
                  >
                    {val.loan_status}
                  </span>
                </h6>
              </div>
              <div className="col-6">
                <h6>Funded Amount : {val.funded_amnt_inv}</h6>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-6">Last Payment : {val.last_pymnt_d}</div>
              <div className="col-6">
                Last Payment Amount : {val.last_pymnt_amnt}
              </div>
            </div>
            <hr />
            <div className="alert alert-success">
              <small>
                For {val.term} @ {val.int_rate}%
              </small>
            </div>
            <div
              className={`alert ${
                val.verification_status === "Verified"
                  ? "alert-success"
                  : "alert-danger"
              }`}
            >
              Verification Status : {val.verification_status}
            </div>
            <h6>Installment : {val.installment}</h6>
            <h6>Annual Income : {val.annual_inc}</h6>
            <h6>Isuued @ : {val.issue_d}</h6>
            <div className="alert alert-secondary my-3 p-3 border">
              <h6>Description :</h6>
              <p>{val.desc}</p>
            </div>
            <h6>Address : {val.addr_state}</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetail;
