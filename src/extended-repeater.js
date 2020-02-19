module.exports = function repeater(str, options) {
  let {
    repeatTimes,
    separator,
    addition,
    additionRepeatTimes,
    additionSeparator
  } = options;

  str = String(str);
  repeatTimes = isUndefined(repeatTimes, 1);
  separator = isUndefined(separator, '+');
  additionRepeatTimes = isUndefined(additionRepeatTimes, 1);
  additionSeparator = isUndefined(additionSeparator, '|');

  if (addition !== undefined) {
    addition = String(addition);
    str += repeatSubStr(addition,additionRepeatTimes,additionSeparator);
  }

  return repeatSubStr(str,repeatTimes,separator);

  function isUndefined(name, value) {
    return name = name === undefined ? value: name;
  }  

  function repeatSubStr(substr, numberRepeat, strSeparator) {
    let arr = []
            
    for(let i = 1; i <= numberRepeat; i++) {
      arr.push(substr) ;
    }

    return arr.join(strSeparator);  
  }
};