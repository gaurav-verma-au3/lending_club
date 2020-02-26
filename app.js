const express = require("express");
const app = express();
require("dotenv").config();
const path = require("path");
const DB = require("./db");
const uploads = require("./routes/uploads");
const widgets = require("./routes/widgets");
const graphs = require("./routes/graphs");
const search = require("./routes/search");
const member = require("./routes/member");
//--------PORT declaration

const PORT = process.env.PORT || 3001;

//-----------cors policies

const cors = require("cors");
app.use(cors());

//-----------body parser setup

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

//-----------db integration

DB(app);

//--------routes declaration

app.use("/", uploads);
app.use("/", member);
app.use("/", widgets);
app.use("/", graphs);
app.use("/", search);
//-----deployment configs

// //production mode
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, 'client/build')));
//   app.get('*', (req, res) => { res.sendfile(path.join(__dirname = 'client/build/index.html')); })
// }

// //build mode
// app.get('*', (req, res) => { res.sendFile(path.join(__dirname + '/client/public/index.html')); })

//-------- server start

app.listen(PORT, () => {
  console.log("App Connected on :", PORT);
});
