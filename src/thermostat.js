function Thermostat(){
  this.min_temp = 10;
  this.temperature = 20;
  this.maxTempSaveOn = 25;
  this.maxTempSaveOff = 32
  this.powerSaveModeOn = true
  this.lowUsage = 18;
  this.highUsage = 25
};

Thermostat.prototype.up = function(){
  if(!this.powerSaveModeOn && this.temperature >= this.maxTempSaveOff){
  throw new Error('Max temp when power saving mode is off is 32 degrees')}
  if(this.powerSaveModeOn && this.temperature >= this.maxTempSaveOn){
  throw new Error('Max temp in power saving mode set at 25 degrees')}
  return this.temperature ++;
};

Thermostat.prototype.down = function(){
  if(this.temperature <= this.min_temp ){
    throw new Error('Min temp set at 10 degrees')};
  return this.temperature --;
};

Thermostat.prototype.powerSaveModeSwitch = function(){
  if (this.powerSaveModeOn === true) {
    return (this.powerSaveModeOn = false)
  }
  else {
    if(this.temperature > this.maxTempSaveOn){ this.temperature = this.maxTempSaveOn }
    return (this.powerSaveModeOn = true)
  };
};

Thermostat.prototype.reset = function(){
  this.temperature = 20
};

Thermostat.prototype.usage = function(){
  if (this.temperature < this.lowUsage) {
    return 'Low usage';
  }
  if (this.temperature > this.highUsage) {
    return 'High usage'
  }
  else
    return 'Medium usage'
};
