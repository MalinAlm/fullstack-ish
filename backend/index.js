const express = require("express");
path = require("path");
const app = express(),
  port = process.env.PORT || 3000;

//de två följande krockar, den som kommer först vinner över den andra, och visas därför i. vi la till api
app.get("/api", (_request, response) => {
  response.send({ hello: "World" });
});

app.use(express.static(path.join(path.resolve(), "public")));

app.listen(port, () => {
  console.log(`Redo på http://localhost:${port}/`);
});
//loggar sökvägen
// console.log(path.join(path.resolve(), "public"));
