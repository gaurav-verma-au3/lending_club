const router = require("express").Router();

//------get route for getting a single member by member id as url params

router.get("/member/:member_id", (req, res) => {
  const member_id = req.params.member_id;

  db.collection("loans")
    .find({ member_id: member_id })
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});

module.exports = router;
