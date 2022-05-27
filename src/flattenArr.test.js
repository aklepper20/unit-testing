describe("flatten(array)", function () {
  beforeEach(function () {
    expect(flatten).to.be.a("function");
  });

  context('[["foo", "bar"], ["baz", "qux"]]', function () {
    it('returns ["foo", "bar", "baz", "qux"]', function () {
      const input = [
        ["foo", "bar"],
        ["baz", "qux"],
      ];
      const output = flatten(input);
      expect(output).to.deep.equal(["foo", "bar", "baz", "qux"]);
    });
  });

  context("[[1], [2], 3, 4, [5]]", function () {
    it("returns [1, 2, 3, 4, 5]", function () {
      const input = [[1], [2], 3, 4, [5]];
      const output = flatten(input);
      expect(output).to.deep.equal([1, 2, 3, 4, 5]);
    });
  });

  context("[false, [true, [false]], [true]]", function () {
    it("returns [false, true, [false], true]", function () {
      const input = [false, [true, [false]], [true]];
      const output = flatten(input);
      expect(output).to.deep.equal([false, true, [false], true]);
    });
  });
});
