const router = require("express").Router();

router.get("/search/:keyword", (req, res) => {
  const keyword = req.params.keyword;

  db.collection("loans")
    .find({
      member_id: { $regex: `${keyword}` }
    })
    .toArray((err, result) => {
      if (err) throw err;

      const ids = result.map(o => o.member_id);

      res.send(ids);
    });
});

module.exports = router;
