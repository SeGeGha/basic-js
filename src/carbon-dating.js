const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let valueActivity = (typeof(sampleActivity) == 'string') ? Number.parseFloat(sampleActivity) : false;
  
  if (!valueActivity || valueActivity > 15 || valueActivity < 0) return false;
  
  return Math.ceil(Math.log(MODERN_ACTIVITY / valueActivity) * HALF_LIFE_PERIOD / 0.693);
};