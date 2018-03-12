"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAreas = getAreas;
exports.getPerimeters = getPerimeters;
function getAreas(shapes) {
  return shapes.map(function (shape) {
    return shape.area;
  });
}

function getPerimeters(shapes) {
  return shapes.map(function (shape) {
    return shape.perimeter;
  });
}