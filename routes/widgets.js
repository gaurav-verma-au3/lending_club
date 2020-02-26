const router = require("express").Router();

router.get("/widgets/top/:count", (req, res) => {
  const count = parseInt(req.params.count);

  db.collection("loans")
    .find({})
    .sort({ loan_amnt: -1 })
    .limit(count)
    .toArray((err, data) => {
      res.send(data);
    });
});

module.exports = router;
