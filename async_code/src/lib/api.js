
const myAPi = (function() {
  return {
    getDBData: () => {
      console.log('get db data [async]');

      // suppose DB taking 3 seconds to return data
      setTimeout(() => {
        console.log('DB data...');
        let data = 'DB data';
        return data;
      },3000);

      console.log('end of get DB data');
      return true;
    },

    getDBDataUsingCallBack: (callback) => {
      console.log('get db data [async] using callback');
      // suppose DB taking 3 seconds to return data
      setTimeout(() => {
        console.log('DB data...[callback]');
        let data = 'DB data callback';
        callback(data);
      },3000);

      console.log('end of get DB data using callback');
      return true;
    },

    getDBDataUsingPromise: () => {
      console.log('get db data [async] using promise');
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('DB data...[promise]');
          let data = 'DB data promise';
          resolve(data);
          // we can catch error using reject  
          // reject(`can't connect to DB..`);
          
        },3000);
      });
    }

  }
})();

module.exports = myAPi;