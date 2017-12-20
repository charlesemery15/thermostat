describe('A Thermostat', function (){
  var thermostat;

  thermostat = new Thermostat()

  it('should start at 20 degrees', function(){
    expect(thermostat.temperature).toEqual(20);
  });
});
