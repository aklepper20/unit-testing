describe("The add two function", function () {
  it("should add 2 numbers together", function () {
    const result = addTwo(2, 2);
    expect(result).to.be.eq(4);
  });
  it("should be able to handle 1 number", function () {
    const result = addTwo(2);
    expect(result).to.be.eq(2);
  });
  it("should be able to handle 0 numbers", function () {
    const result = addTwo();
    expect(result).to.be.eq(0);
  });
});
