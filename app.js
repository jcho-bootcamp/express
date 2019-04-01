const express = require("express");
const app = express();
const port = 3000;

let speak = {
  pig: "Oink!",
  cow: "Moo!",
  dog: "Woof Woof!"
}


app.get("/", (req, res) => res.send("Hi there, welcome to my assignment!"));

app.get("/speak/:animal", function (req, res) {
  let params = req.params.animal;
  res.send(`The ${params} says ${speak[params]}`);
});

app.get("/repeat/:str/:number", function (req, res) {
  let str = req.params.str;
  let params = req.params.number;
  let num = Number(params);
  res.send(function (num) {
    for (let i = 0; i < num; i++) {
      console.log("str");
    }
  });
});

app.get("*", (req, res) => res.send("Sorry, page not found...What are you doing with your life?"));


app.listen(port, () => console.log(`Server has Started on port ${port}!`));