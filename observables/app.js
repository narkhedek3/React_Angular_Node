const myApi = require('./src/lib/api');

const runApp = () => {

  // diff between promise and Observable is here we will get stream of data
  myApi.getData().subscribe(data => {
    console.log(data);
  });



  myApi.getDataUsingCustomObservable().subscribe(data => {
    console.log(data);
  });

}

runApp();