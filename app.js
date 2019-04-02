const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hi there, welcome to my assignment!"));

app.get("/speak/:animal", function (req, res) {
  let speak = {
    pig: "Oink!",
    cow: "Moo!",
    dog: "Woof Woof!"
  }

  let animal = req.params.animal.toLowerCase();

  res.send(`The ${animal} says "${speak[animal]}"`);
});

app.get("/repeat/:str/:number", function (req, res) {
  let str = req.params.str;
  let num = Number(req.params.number);
  let result = "";

  for (let i = 0; i < num; i++) {
    result += str + " ";
  }

  res.send(result);
});

app.get("*", (req, res) => res.send("Sorry, page not found...What are you doing with your life?"));

app.listen(port, () => console.log(`Server has Started on port ${port}!`));