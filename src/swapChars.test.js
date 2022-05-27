describe("swapChars(firstIndex, secondIndex, string)", function () {
  beforeEach(function () {
    expect(swapChars).to.be.a("function");
  });

  it('swaps the "A" and "l" in "Aly"', function () {
    const result = swapChars(0, 1, "aly");
    expect(result).to.equal("lay");
  });

  it('swaps the "R" and "t" of "React"', function () {
    const result = swapChars(0, 4, "React");
    expect(result).to.equal("teacR");
  });

  it('swaps the "J" and "R" in "HTML, CSS, JavaScript, React"', function () {
    const result = swapChars(11, 23, "HTML, CSS, JavaScript, React");
    expect(result).to.equal("HTML, CSS, RavaScript, Jeact");
  });
});
