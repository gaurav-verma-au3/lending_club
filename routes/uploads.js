const router = require("express").Router();
const file =
  "/home/gaurav/work/lending_club_hackerearth/routes/loan_part_0009b606f.csv";
const csvtojson = require("csvtojson");

router.get("/uploads", (req, res) => {
  let convertedData = [];
  let count = 0;

  csvtojson()
    .fromFile(file)
    .then(data => {
      data.map(recrd => {
        if (recrd.member_id === "member_id") count += 1;

        convertedData.push({
          member_id: recrd.member_id,
          loan_amnt: parseFloat(recrd.loan_amnt),
          funded_amnt_inv: parseFloat(recrd.funded_amnt_inv),
          term: recrd.term,
          int_rate: parseFloat(recrd.int_rate),
          installment: parseFloat(recrd.installment),
          grade: recrd.grade,
          emp_title: recrd.emp_title,
          emp_length: recrd.emp_title,
          home_ownership: recrd.home_ownership,
          annual_inc: parseFloat(recrd.annual_inc),
          verification_status: recrd.verification_status,
          issue_d: recrd.issue_d,
          loan_status: recrd.loan_status,
          desc: recrd.desc,
          purpose: recrd.purpose,
          title: recrd.title,
          addr_state: recrd.addr_state,
          last_pymnt_d: recrd.last_pymnt_d,
          last_pymnt_amnt: parseFloat(recrd.last_pymnt_amnt)
        });
      });
      db.collection("loans").insertMany(convertedData, (err, result) => {
        res.send(result);
      });
    });
});

module.exports = router;
