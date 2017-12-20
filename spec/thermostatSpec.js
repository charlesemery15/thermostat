describe('A Thermostat', function (){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat()
  });

  it('should start at 20 degrees', function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it('should increase the temperature with an up function', function(){
    thermostat.up()
    expect(thermostat.temperature).toBeGreaterThan(20)
  });
  it('should decrease the temperature with an up function', function(){
    thermostat.down()
    expect(thermostat.temperature).toBeLessThan(20)
  });
  it('should prevent temp drop lower than 10 degrees', function(){
    for( var i = 20; i >= 10; i--) {
      thermostat.down()
    }
    expect(function(){thermostat.down()}).toThrowError('Min temp set at 10 degrees')
  });
});
