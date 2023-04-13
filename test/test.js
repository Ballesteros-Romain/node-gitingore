const assert = require("assert");

describe("Array", function () {
  describe("IndexOf", function () {
    it("should return -1 when the valueis not prevent", function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
