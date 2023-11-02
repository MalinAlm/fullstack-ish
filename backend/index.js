const express = require("express");
path = require("path");
const app = express(),
  port = process.env.PORT || 3000;
var cors = require("cors");

app.use(cors());

app.get("/products/:id", function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

app.listen(80, function () {
  console.log("CORS-enabled web server listening on port 80");
});

const dotenv = require("dotenv"),
  { Client } = require("pg");
dotenv.config();

const client = new Client({
  connectionString: process.env.PGURI,
});

client.connect();

app.get("/api", async (_request, response) => {
  const { rows } = await client.query(
    // "SELECT * FROM interior WHERE name = $1",
    // ["Urban"]
    "SELECT * FROM interior"
  );
  console.log(rows, "rows");

  response.send(rows);
});

//de två följande raderne krockar, den som kommer först vinner över den andra
app.use(express.static(path.join(path.resolve(), "public")));

app.listen(port, () => {
  console.log(`Redo på http://localhost:${port}/`);
});
