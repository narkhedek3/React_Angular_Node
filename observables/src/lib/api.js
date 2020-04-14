const { Observable } = require('rxjs');
const { CustomObservable } = require('./CustomObservable');

const myApi = (() => {
  return {
    getData: () => {
      return new Observable(observer => {
        let i = 0;
        let interval = setInterval(() => {
          if (i >= 5) {
            clearInterval(interval);
            // observer.error(); // to throw error
            // observer.complete();  
            // observer.complete() using this we can close stream.
            // after executing observer.complete() observer.next() will not stream any data.
          }
          let data = 'My Data';
          observer.next(data);
          i++;
        }, 3000);
      });
    },

    getDataUsingCustomObservable: () => {
      return new CustomObservable((observer) => {
        setTimeout(() => {
          let data = 'Some data';
          observer.next(data);
          observer.next(data + ' 2');
          observer.complete('completed');
          observer.next(data + ' 3');
        }, 3000);
      });
    }
  }
})();

module.exports = myApi;