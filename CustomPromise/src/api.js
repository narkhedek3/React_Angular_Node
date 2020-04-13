const CustomPromise = require('../lib/CustomPromise');

const myApi = (() => {
  return {
    getData : () => {
      return new CustomPromise((resolve,reject) => {
        setTimeout(() => {
          let data = 'My Data';
          resolve(data);
        },3000);
      });
    }
  }
})();

module.exports = myApi;