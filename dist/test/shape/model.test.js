"use strict";

var _assert = require("assert");

var assert = _interopRequireWildcard(_assert);

var _model = require("../../src/shape/model");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

describe("Shape.Model.Circle", function () {
  describe("#constructor", function () {
    it('returns a Circle object', function () {
      assert.ok(new _model.Circle(new _model.Point(20, 30), 10));
      assert.equal(new _model.Circle(new _model.Point(20, 30), 10).center.x, 20);
      assert.equal(new _model.Circle(new _model.Point(20, 30), 10).center.y, 30);
      assert.equal(new _model.Circle(new _model.Point(20, 30), 10).radius, 10);
    });

    context("when the radius is invalid", function () {
      it("sets the radius to zero", function () {
        assert.equal(new _model.Circle(new _model.Point(20, 30), -10).radius, 0);
      });
    });
  });

  describe("#area", function () {
    it("returns the circle area", function () {
      assert.equal(new _model.Circle(new _model.Point(20, 30), 10).area, 314.1592653589793);
    });
  });

  describe("#perimeter", function () {
    it("returns the circle perimeter", function () {
      assert.equal(new _model.Circle(new _model.Point(20, 30), 10).perimeter, 62.83185307179586);
    });
  });

  describe("#collidesWith", function () {
    context("when the circle intercepts the other circle", function () {
      it("returns true", function () {
        assert.strictEqual(new _model.Circle(new _model.Point(20, 30), 10).collidesWith(new _model.Circle(new _model.Point(25, 35), 15)), true);
      });
    });

    context("when the circle does not intercepts the other circle", function () {
      it("returns false", function () {
        assert.strictEqual(new _model.Circle(new _model.Point(20, 30), 10).collidesWith(new _model.Circle(new _model.Point(45, 55), 15)), false);
      });
    });

    context("when the passed object is not a circle", function () {
      it("returns null", function () {
        assert.strictEqual(new _model.Circle(new _model.Point(20, 30), 10).collidesWith(new _model.Rectangle(new _model.Point(20, 30), 20, 40)), null);
      });
    });
  });
});

describe("Shape.Model.Rectangle", function () {
  describe("#constructor", function () {
    it('returns a Rectangle object', function () {
      assert.ok(new _model.Rectangle(new _model.Point(20, 30), 10, 20));
      assert.equal(new _model.Rectangle(new _model.Point(20, 30), 10, 20).pos.x, 20);
      assert.equal(new _model.Rectangle(new _model.Point(20, 30), 10, 20).pos.y, 30);
      assert.equal(new _model.Rectangle(new _model.Point(20, 30), 10, 20).width, 10);
      assert.equal(new _model.Rectangle(new _model.Point(20, 30), 10, 20).height, 20);
    });

    context("when the size has invalid values", function () {
      it("sets the invalid values to zero", function () {
        assert.equal(new _model.Rectangle(new _model.Point(20, 30), -10, 20).width, 0);
        assert.equal(new _model.Rectangle(new _model.Point(20, 30), 10, -20).height, 0);
      });
    });
  });

  describe("#area", function () {
    it("returns the rectangle area", function () {
      assert.equal(new _model.Rectangle(new _model.Point(20, 30), 10, 5).area, 50);
    });
  });

  describe("#perimeter", function () {
    it("returns the rectangle perimeter", function () {
      assert.equal(new _model.Rectangle(new _model.Point(20, 30), 10, 5).perimeter, 30);
    });
  });

  describe("#collidesWith", function () {
    context("when the rectangle intercepts the other rectangle", function () {
      it("returns true", function () {
        assert.strictEqual(new _model.Rectangle(new _model.Point(20, 30), 10, 20).collidesWith(new _model.Rectangle(new _model.Point(25, 35), 10, 20)), true);
      });
    });

    context("when the rectangle does not intercepts the other rectangle", function () {
      it("returns false", function () {
        assert.strictEqual(new _model.Rectangle(new _model.Point(20, 30), 10, 20).collidesWith(new _model.Rectangle(new _model.Point(45, 55), 10, 20)), false);
      });
    });

    context("when the passed object is not a rectangle", function () {
      it("returns null", function () {
        assert.strictEqual(new _model.Rectangle(new _model.Point(20, 30), 10).collidesWith(new _model.Circle(new _model.Point(20, 30), 20)), null);
      });
    });
  });
});

describe("Shape.Model.Square", function () {
  describe("#constructor", function () {
    it('returns a Square object', function () {
      assert.ok(new _model.Square(new _model.Point(20, 30), 10));
      assert.equal(new _model.Square(new _model.Point(20, 30), 10).pos.x, 20);
      assert.equal(new _model.Square(new _model.Point(20, 30), 10).pos.y, 30);
      assert.equal(new _model.Square(new _model.Point(20, 30), 10).width, 10);
    });

    context("when the size has invalid values", function () {
      it("sets the invalid values to zero", function () {
        assert.equal(new _model.Square(new _model.Point(20, 30), -10).width, 0);
      });
    });
  });

  describe("#area", function () {
    it("returns the square area", function () {
      assert.equal(new _model.Square(new _model.Point(20, 30), 10).area, 100);
    });
  });

  describe("#perimeter", function () {
    it("returns the square perimeter", function () {
      assert.equal(new _model.Square(new _model.Point(20, 30), 10).perimeter, 40);
    });
  });

  describe("#collidesWith", function () {
    context("when the square intercepts the other square", function () {
      it("returns true", function () {
        assert.strictEqual(new _model.Square(new _model.Point(20, 30), 10).collidesWith(new _model.Square(new _model.Point(25, 35), 10)), true);
      });
    });

    context("when the square does not intercepts the other square", function () {
      it("returns false", function () {
        assert.strictEqual(new _model.Square(new _model.Point(20, 30), 10).collidesWith(new _model.Square(new _model.Point(45, 55), 10)), false);
      });
    });

    context("when the passed object is not a square", function () {
      it("returns null", function () {
        assert.strictEqual(new _model.Square(new _model.Point(20, 30), 10).collidesWith(new _model.Circle(new _model.Point(20, 30), 20)), null);
      });
    });
  });
});

describe("Shape.Model.Point", function () {
  describe("#constructor", function () {
    it("returns a Point object", function () {
      assert.ok(new _model.Point(12, 23));
      assert.equal(new _model.Point(12, 23).x, 12);
      assert.equal(new _model.Point(12, 23).y, 23);
    });

    context("when the values are invalid", function () {
      it("sets the values to zero", function () {
        assert.equal(new _model.Point(-10, 20).x, 0);
        assert.equal(new _model.Point(10, -20).y, 0);
      });
    });
  });

  describe("#get.x", function () {
    it("returns the x value", function () {
      assert.equal(new _model.Point(10, 20).x, 10);
    });
  });

  describe("#set.x", function () {
    it("set the value to x", function () {
      var point = new _model.Point(10, 20);
      point.x = 35;
      assert.equal(point.x, 35);
    });

    context("when the value is invalid", function () {
      it("set zero to x", function () {
        var point = new _model.Point(10, 20);
        point.x = -35;
        assert.strictEqual(point.x, 0);
      });
    });
  });

  describe("#get.y", function () {
    it("returns the y value", function () {
      assert.equal(new _model.Point(10, 20).y, 20);
    });
  });

  describe("#set.y", function () {
    it("set the value to y", function () {
      var point = new _model.Point(10, 20);
      point.y = 35;
      assert.equal(point.y, 35);
    });

    context("when the value is invalid", function () {
      it("set zero to y", function () {
        var point = new _model.Point(10, 20);
        point.y = -35;
        assert.strictEqual(point.y, 0);
      });
    });
  });
});