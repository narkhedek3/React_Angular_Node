const myApi = require('./src/lib/api');

async function runApp() {
  let data = myApi.getDBData();
  console.log(data, 'here we are not getting expected data');

  let res = myApi.getDBDataUsingCallBack((data) => {
    console.log(data, 'data after using callback');
  });
  console.log(res, 'return value of getDBDataUsingCallBack()');

  let promise = await myApi.getDBDataUsingPromise()
    .then((data) => {
      console.log(data, 'data after using promise');
      // if we retrun anything from here it will be same as "resolve(whatever you are returning)";
      // then(cb) again retruns new promise
      return 'to next then function';
    })
    .then((fromLastThen) => {
      console.log(fromLastThen);
    })
    .catch((error) => {
      console.log(error);
    });

    // this console.log() waiting beacause we have used async await 
    // in above code it will work only with promise
    console.log('execution completed');
}

runApp();