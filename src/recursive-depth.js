module.exports = class DepthCalculator {
    calculateDepth(arr, count = 1, maxDeep = [1]) {
       arr = arr.filter( item => Array.isArray(item) == true);
    if (arr.length ==0) {
        count = maxDeep[maxDeep.length - 2];
    } else {
        count++;
        for(let item of arr) {
            maxDeep.push(count);
            this.calculateDepth(item, count, maxDeep);
        }
    }
      return Math.max(...maxDeep);
    }
};