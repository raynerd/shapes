"use strict";

import * as assert from "assert";

import getPerimeters from "../../../src/shape/operations/get-perimeters";
import {
  Circle,
  Point,
  Rectangle,
  Square
} from "../../../src/shape/model";

describe("Shape.Operations.getPerimeters", function() {
  it("get the shapes perimeters", function() {
    const perimeters = getPerimeters([
      new Circle(new Point(10, 10), 10),
      new Rectangle(new Point(10, 10), 10, 20),
      new Square(new Point(10, 10), 10)
    ]);
    assert.deepEqual(perimeters, [62.83185307179586, 60, 40]);
  });
});
