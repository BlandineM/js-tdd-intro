const Rectangle = require("../rectangle");
const assert = require("assert");

describe("rectangle", () => {
  it("isSquare return true if a = b", () => {
    const rectangle = new Rectangle(5, 5);
    assert.strictEqual(rectangle.isSquare(), true);
  });

  it("isSquare return false if a != b", () => {
    const rectangle = new Rectangle(5, 6);
    assert.strictEqual(rectangle.isSquare(), false);
  });

  it("getArea return the aire of the rectangle", () => {
    const rectangle = new Rectangle(5, 6);
    assert.strictEqual(rectangle.getArea(), 30);
  });

  it("getPerimeter return the perimeter of the rectangle", () => {
    const rectangle = new Rectangle(5, 6);
    assert.strictEqual(rectangle.getPerimeter(), 22);
  });
});
