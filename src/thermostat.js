function Thermostat(){
  this.min_temp = 10;
  this.temperature = 20;
  this.maxTempPowerOn = 25;
  this.powerSaveModeOn = true
};

Thermostat.prototype.up = function(){
  if(this.powerSaveModeOn && this.temperature >= this.maxTempPowerOn){
    console.log(this.temperature)
  throw new Error('Max temp in power saving mode set at 25 degrees')}
  return this.temperature ++;
};

Thermostat.prototype.down = function(){
  if(this.temperature < this.min_temp ){
    throw new Error('Min temp set at 10 degrees')};
  return this.temperature --;
};

Thermostat.prototype.powerSaveModeSwitch = function(){
  if (this.powerSaveModeOn === true) {
    return (this.powerSaveModeOn = false)
  } else {
    return (this.powerSaveModeOn = true)
  };
};
