const express = require("express");
path = require("path");
const app = express(),
  port = process.env.PORT || 3000;
var cors = require("cors");

app.use(express.json());
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

//Get and post for interior
app.get("/api", async (_request, response) => {
  const { rows } = await client.query("SELECT * FROM interior");
  console.log(rows, "rows");

  response.send(rows);
});
app.post("/api", async (request, response) => {
  try {
    const { name, category, price } = request.body;
    //Följande har samma effekt som ovanstående rad
    // let name = request.body.name;
    // let category = request.body.category;
    // let price = request.body.price;

    await client.query(
      "INSERT INTO interior (name, category, price) VALUES ($1, $2, $3)",
      [name, category, price]
    );
    const { rows } = await client.query("SELECT * FROM interior");
    response.status(201).send(rows);
  } catch (error) {
    console.error(error);
    response.status(500).send("Internal server error");
  }
});

app.get("/api", async (_request, response) => {
  const { rows } = await client.query("SELECT * FROM images");
  console.log(rows, "images");

  response.send(rows);
});

//de två följande raderne krockar, den som kommer först vinner över den andra
app.use(express.static(path.join(path.resolve(), "public")));

app.listen(port, () => {
  console.log(`Redo på http://localhost:${port}/`);
});
