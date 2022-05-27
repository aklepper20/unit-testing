describe("getKeys(object)", function () {
  beforeEach(function () {
    expect(getKeys).to.be.a("function");
  });

  it("returns Dave's property keys", function () {
    const dave = {
      firstName: "David",
      lastName: "Thomas",
    };
    const output = getKeys(dave);
    expect(output)
      .to.be.an("array")
      .with.length(2)
      .that.includes("firstName")
      .and.includes("lastName");
  });

  it("returns Target's property keys", function () {
    const Target = {
      latitude: 33.6349,
      attitude: "sanguine",
      longitude: 117.7405,
    };
    const output = getKeys(Target);
    expect(output)
      .to.be.an("array")
      .with.length(3)
      .that.includes("latitude")
      .that.includes("attitude")
      .and.includes("longitude");
  });

  it("returns Tim's property keys", function () {
    const tim = {};
    const output = getKeys(tim);
    expect(output).to.deep.equal([]);
  });
});
