describe("toObject(keyValuePair)", function () {
  beforeEach(function () {
    expect(toObject).to.be.a("function");
  });

  it("creates a Dave object", function () {
    var output = toObject(["firstName", "David"]);
    expect(output).to.deep.equal({
      firstName: "David",
    });
  });

  it("creates a cool object", function () {
    var output = toObject(["isCool", true]);
    expect(output).to.deep.equal({
      isCool: true,
    });
  });

  it("creates an employee object", function () {
    var output = toObject(["employer", "sas"]);
    expect(output).to.deep.equal({
      employer: "sas",
    });
  });
});