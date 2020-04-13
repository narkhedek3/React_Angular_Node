const api = require('./src/api');

const runApp = () => {

  api.getData()
    .then((data) => {
      console.log(data);
      return data + ' updated';
    })
    .then((data) => {
      console.log(data);
      return data + ' 898989';
    })
    .then(data => {
      throw new Error('error');
    })
    .catch(error => {
      console.log('1');
      console.log(error);
    });

}

runApp();