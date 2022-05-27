describe("reverseWord(word)", function () {
  beforeEach(function () {
    expect(reverseWord).to.be.a("function");
  });

  it('returns "oof" for "foo"', function () {
    const input = "foo";
    const output = reverseWord(input);
    expect(output).to.equal("oof");
  });

  it('returns "bar" for "rab"', function () {
    const input = "rab";
    const output = reverseWord(input);
    expect(output).to.equal("bar");
  });

  it('returns "eoJydoC" for "CodyJoe"', function () {
    const input = "CodyJoe";
    const output = reverseWord(input);
    expect(output).to.equal("eoJydoC");
  });

  it('returns "JavaScript" for "tpircSavaJ"', function () {
    const input = "tpircSavaJ";
    const output = reverseWord(input);
    expect(output).to.equal("JavaScript");
  });

  it('returns "racecar" for "racecar"', function () {
    const input = "racecar";
    const output = reverseWord(input);
    expect(output).to.equal("racecar");
  });
});
