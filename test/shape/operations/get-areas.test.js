"use strict";

import * as assert from "assert";

import getAreas from "../../../src/shape/operations/get-areas";
import {
  Circle,
  Point,
  Rectangle,
  Square
} from "../../../src/shape/model";

describe("Shape.Operations.getAreas", function() {
  it("get the shapes areas", function() {
    const areas = getAreas([
      new Circle(new Point(10, 10), 10),
      new Rectangle(new Point(10, 10), 10, 20),
      new Square(new Point(10, 10), 10)
    ]);
    assert.deepEqual(areas, [314.1592653589793, 200, 100]);
  });
});
