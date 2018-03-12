"use strict";

export class Shape {
  constructor() {}
}

export class Circle extends Shape {
  constructor(center, radius) {
    super();
    this.center = center;
    this.radius = radius > 0 ? radius : 0;
  }

  get area() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  get perimeter() {
    return 2 * Math.PI * this.radius;
  }

  collidesWith(circle) {
    if (circle instanceof Circle) {
      const dx = circle.center.x - this.center.x;
      const dy = circle.center.y - this.center.y;
      const dc = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));

      return dc < circle.radius + this.radius;
    }
    console.log("the shape should be a Circle");
    return null;
  }
}

export class Rectangle extends Shape {
  constructor(pos, width, height) {
    // console.log('aaaa', width)
    super();
    this.pos = pos;
    // console.log('www', width, width > 0 ? width : 0)
    this.width = width > 0 ? width : 0;
    this.height = height > 0 ? height : 0;
  }

  get area() {
    return this.width * this.height;
  }

  get perimeter() {
    return 2 * (this.width + this.height);
  }

  collidesWith(rectangle) {
    if (rectangle instanceof Rectangle) {
      const x1 = rectangle.pos.x;
      const x2 = x1 + rectangle.width;
      const y1 = rectangle.pos.y;
      const y2 = y1 + rectangle.height;

      const totallyLeft = x2 < this.pos.x;
      const totallyRight = x1 > this.pos.x + this.width;
      const totallyUp = y2 < this.pos.y;
      const totallyBottom = y1 > this.pos.y + this.height;

      return !(totallyLeft || totallyRight || totallyUp || totallyBottom);
    }
    console.log("the shape should be a Rectangle");
    return null;
  }
}

export class Square extends Rectangle {
  constructor(pos, width) {
    super(pos, width);
    this.pos = pos;
    this.width = width > 0 ? width : 0;
  }

  get area() {
    return this.width * this.width;
  }

  get perimeter() {
    return 4 * this.width;
  }

  collidesWith(square) {
    if (square instanceof Square) {
      const x1 = square.pos.x;
      const x2 = x1 + square.width;
      const y1 = square.pos.y;
      const y2 = y1 + square.width;

      const totallyLeft = x2 < this.pos.x;
      const totallyRight = x1 > this.pos.x + this.width;
      const totallyUp = y2 < this.pos.y;
      const totallyBottom = y1 > this.pos.y + this.width;

      return !(totallyLeft || totallyRight || totallyUp || totallyBottom);
    }
    console.log("the shape should be a Square");
    return null;
  }
}

export class Point {
  constructor(x, y) {
    this._x = x > 0 ? x : 0;
    this._y = y > 0 ? y : 0;
  }

  get x() {
    return this._x;
  }

  set x(value) {
    this._x = value > 0 ? value : 0;
  }

  get y() {
    return this._y;
  }

  set y(value) {
    this._y = value > 0 ? value : 0;
  }
}
