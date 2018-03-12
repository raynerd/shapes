"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Shape = exports.Shape = function Shape() {
  _classCallCheck(this, Shape);
};

var Circle = exports.Circle = function (_Shape) {
  _inherits(Circle, _Shape);

  function Circle(center, radius) {
    _classCallCheck(this, Circle);

    var _this = _possibleConstructorReturn(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).call(this));

    _this.center = center;
    _this.radius = radius > 0 ? radius : 0;
    return _this;
  }

  _createClass(Circle, [{
    key: "collidesWith",
    value: function collidesWith(circle) {
      if (circle instanceof Circle) {
        var dx = circle.center.x - this.center.x;
        var dy = circle.center.y - this.center.y;
        var dc = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));

        return dc < circle.radius + this.radius;
      }
      console.log("the shape should be a Circle");
      return null;
    }
  }, {
    key: "area",
    get: function get() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  }, {
    key: "perimeter",
    get: function get() {
      return 2 * Math.PI * this.radius;
    }
  }]);

  return Circle;
}(Shape);

var Rectangle = exports.Rectangle = function (_Shape2) {
  _inherits(Rectangle, _Shape2);

  function Rectangle(pos, width, height) {
    _classCallCheck(this, Rectangle);

    var _this2 = _possibleConstructorReturn(this, (Rectangle.__proto__ || Object.getPrototypeOf(Rectangle)).call(this));
    // console.log('aaaa', width)


    _this2.pos = pos;
    // console.log('www', width, width > 0 ? width : 0)
    _this2.width = width > 0 ? width : 0;
    _this2.height = height > 0 ? height : 0;
    return _this2;
  }

  _createClass(Rectangle, [{
    key: "collidesWith",
    value: function collidesWith(rectangle) {
      if (rectangle instanceof Rectangle) {
        var x1 = rectangle.pos.x;
        var x2 = x1 + rectangle.width;
        var y1 = rectangle.pos.y;
        var y2 = y1 + rectangle.height;

        var totallyLeft = x2 < this.pos.x;
        var totallyRight = x1 > this.pos.x + this.width;
        var totallyUp = y2 < this.pos.y;
        var totallyBottom = y1 > this.pos.y + this.height;

        return !(totallyLeft || totallyRight || totallyUp || totallyBottom);
      }
      console.log("the shape should be a Rectangle");
      return null;
    }
  }, {
    key: "area",
    get: function get() {
      return this.width * this.height;
    }
  }, {
    key: "perimeter",
    get: function get() {
      return 2 * (this.width + this.height);
    }
  }]);

  return Rectangle;
}(Shape);

var Square = exports.Square = function (_Rectangle) {
  _inherits(Square, _Rectangle);

  function Square(pos, width) {
    _classCallCheck(this, Square);

    var _this3 = _possibleConstructorReturn(this, (Square.__proto__ || Object.getPrototypeOf(Square)).call(this, pos, width));

    _this3.pos = pos;
    _this3.width = width > 0 ? width : 0;
    return _this3;
  }

  _createClass(Square, [{
    key: "collidesWith",
    value: function collidesWith(square) {
      if (square instanceof Square) {
        var x1 = square.pos.x;
        var x2 = x1 + square.width;
        var y1 = square.pos.y;
        var y2 = y1 + square.width;

        var totallyLeft = x2 < this.pos.x;
        var totallyRight = x1 > this.pos.x + this.width;
        var totallyUp = y2 < this.pos.y;
        var totallyBottom = y1 > this.pos.y + this.width;

        return !(totallyLeft || totallyRight || totallyUp || totallyBottom);
      }
      console.log("the shape should be a Square");
      return null;
    }
  }, {
    key: "area",
    get: function get() {
      return this.width * this.width;
    }
  }, {
    key: "perimeter",
    get: function get() {
      return 4 * this.width;
    }
  }]);

  return Square;
}(Rectangle);

var Point = exports.Point = function () {
  function Point(x, y) {
    _classCallCheck(this, Point);

    this._x = x > 0 ? x : 0;
    this._y = y > 0 ? y : 0;
  }

  _createClass(Point, [{
    key: "x",
    get: function get() {
      return this._x;
    },
    set: function set(value) {
      this._x = value > 0 ? value : 0;
    }
  }, {
    key: "y",
    get: function get() {
      return this._y;
    },
    set: function set(value) {
      this._y = value > 0 ? value : 0;
    }
  }]);

  return Point;
}();