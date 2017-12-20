function Thermostat(){
  this.min_temp = 10;
  this.temperature = 20;
};

Thermostat.prototype.up = function(){
  return this.temperature ++;
};

Thermostat.prototype.down = function(){
  if(this.temperature < this.min_temp ){
    throw new Error('Min temp set at 10 degrees')};
  return this.temperature --;
};
