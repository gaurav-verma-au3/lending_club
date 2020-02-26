const router = require("express").Router();

//---------route to get all the years

router.get("/graphs/years", (req, res) => {
  db.collection("loans").distinct("last_pymnt_d", (err, result) => {
    let years = result.map(val => {
      return val.substr(4, 5);
    });
    years = [...new Set(years)];
    let final = [];
    years.map(year => {
      // console.log(year.length);
      if (year.length === 4 && year[0] === "2") final.push(year);
    });

    res.send(final);
  });
});

//----route to get top customers based on interes paid for a given year getting year in url  params

router.get("/graphs/:year", (req, res) => {
  const year = req.params.year;
  const regularExpression = new RegExp(year + "$");
  db.collection("loans")
    .find({ last_pymnt_d: { $regex: regularExpression } })
    .sort({ int_rate: -1 })
    .limit(10)
    .toArray((err, result) => {
      if (err) throw err;
      let graphData = result.map(val => {
        return {
          member_id: val.member_id,
          loan_amnt: val.loan_amnt,
          funded_amnt_inv: val.funded_amnt_inv,
          int_rate: val.int_rate,
          annual_inc: val.annual_inc,
          last_pymnt_amnt: val.last_pymnt_amnt
        };
      });
      res.send(graphData);
    });
});

module.exports = router;
