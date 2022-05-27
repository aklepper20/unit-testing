describe("setValue(object, key, value)", function () {
  beforeEach(function () {
    expect(setValue).to.be.a("function");
  });

  it('sets Dave\'s "lastName" property', function () {
    var dave = {
      firstName: "David",
    };
    setValue(dave, "lastName", "Thomas");
    expect(dave)
      .to.have.property("lastName")
      .that.is.a("string")
      .that.equals("Thomas");
  });

  it('sets Target\'s "attitude" property', function () {
    var Target = {
      latitude: 33.6349,
    };
    setValue(Target, "attitude", "sanguine");
    expect(Target)
      .to.have.property("attitude")
      .that.is.a("string")
      .that.equals("sanguine");
  });

  it('sets Tim\'s "language" property', function () {
    var tim = {
      language: "JavaScript",
    };
    setValue(tim, "language", "PHP");
    expect(tim)
      .to.have.property("language")
      .that.is.a("string")
      .that.equals("PHP");
  });
});
