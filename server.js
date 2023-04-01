const prettyjson = require("prettyjson");
const express = require("express");
const bodyParser = require("body-parser");

const options = {
  noColor: true,
};

// create an express app and configure it with boadyParser middleware
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// create our webhook endpoint to recive incoming data
app.post("/incoming", (req, res) => {
  //   console.log(req);
  console.log("-----------Received POST Response webhook-----------");

  // format and dump the request payload recieved
  console.log(prettyjson.render(req.body, options));
  console.log("-----------------------");

  let message = {
    ResponseCode: 200,
    ResponseDesc: "success",
  };

  // respond a success message
  res.json(message);
});

// create our webhook endpoint to recive incoming data
app.get("/incoming", (req, res) => {
  //   console.log(req);
  console.log("-----------Received GET Response webhook-----------");

  // format and dump the request payload recieved
  console.log(prettyjson.render(req.body, options));
  // console.log(req.query);
  console.log("-----------------------");

  let message = {
    ResponseCode: 200,
    ResponseDesc: "success",
  };

  // respond with a success message
  res.json(message);
});

const server = app.listen(5000, () => {
  let host = server.address().address;
  let port = server.address().port;
  console.log(`server listening on port ${port}`);
});
