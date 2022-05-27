describe("getValue(object, key)", function () {
  beforeEach(function () {
    expect(getValue).to.be.a("function");
  });

  it('returns the value of Dave\'s "firstName" property', function () {
    var dave = {
      firstName: "David",
      lastName: "Thomas",
    };
    var output = getValue(dave, "firstName");
    expect(output).to.equal("David");
  });

  it('returns the value of Dave\'s "lastName" property', function () {
    var dave = {
      firstName: "David",
      lastName: "Thomas",
    };
    var output = getValue(dave, "lastName");
    expect(output).to.equal("Thomas");
  });

  it('returns the "latitude" of Walmart', function () {
    var Walmart = {
      latitude: 33.6349,
      longitude: 117.7405,
    };
    var output = getValue(Walmart, "latitude");
    expect(output).to.equal(33.6349);
  });

  it('returns the "longitude" of Target', function () {
    var Target = {
      latitude: 33.6349,
      longitude: 117.7405,
    };
    var output = getValue(Target, "longitude");
    expect(output).to.equal(117.7405);
  });

  it("returns undefined for non-existent property keys", function () {
    var tim = {
      name: "Tim",
      language: "JavaScript",
    };
    var output = getValue(tim, "yearsExperience");
    expect(output).to.equal(undefined);
  });
});
