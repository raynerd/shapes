"use strict";

import {
  Point,
  Rectangle,
  Square,
  Shape,
  Circle
} from "./src/shape/model";

import getAreas from "./src/shape/operations/get-areas";
import getPerimeters from "./src/shape/operations/get-perimeters";

var express = require('express');

var app = express();

app.get('/', function (req, res) {
  const areas = getAreas([
    new Circle(new Point(10, 10), 10),
    new Rectangle(new Point(10, 10), 10, 20),
    new Square(new Point(10, 10), 10)
  ]);
  const perimeters = getPerimeters([
    new Circle(new Point(10, 10), 10),
    new Rectangle(new Point(10, 10), 10, 20),
    new Square(new Point(10, 10), 10)
  ]);
  res.send(`Areas: ${areas}, Perimeters: ${perimeters}!`);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});