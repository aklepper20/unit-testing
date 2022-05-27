describe("isUpperCased(word)", function () {
  beforeEach(function () {
    expect(isUpperCased).to.be.a("function");
  });

  it('returns false for "CODYKLEPPER"', function () {
    var input = "LearningFuze";
    var output = isUpperCased(input);
    expect(output).to.equal(false);
  });

  it('returns false for "JavaScript"', function () {
    var input = "JavaScript";
    var output = isUpperCased(input);
    expect(output).to.equal(false);
  });

  it('returns true for "HTML"', function () {
    var input = "HTML";
    var output = isUpperCased(input);
    expect(output).to.equal(true);
  });

  it('returns false for "css"', function () {
    var input = "css";
    var output = isUpperCased(input);
    expect(output).to.equal(false);
  });

  it('returns true for "HELLO"', function () {
    var input = "PHP";
    var output = isUpperCased(input);
    expect(output).to.equal(true);
  });
});
