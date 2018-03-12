"use strict";

var _model = require("./src/shape/model");

var _getAreas = require("./src/shape/operations/get-areas");

var express = require('express');

var app = express();

app.get('/', function (req, res) {
  var areas = (0, _getAreas.getAreas)([new _model.Circle(new _model.Point(10, 10), 10), new _model.Rectangle(new _model.Point(10, 10), 10, 20), new _model.Square(new _model.Point(10, 10), 10)]);
  var perimeters = (0, _getAreas.getPerimeters)([new _model.Circle(new _model.Point(10, 10), 10), new _model.Rectangle(new _model.Point(10, 10), 10, 20), new _model.Square(new _model.Point(10, 10), 10)]);
  res.send("Areas: " + areas + ", Perimeters: " + perimeters + "!");
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});