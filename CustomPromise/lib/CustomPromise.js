// below implementation may be wrong
class CustomPromise {

  constructor(callback) {
    this.promiseChain = [];
    this.handleError = () => { };
    this.reject = this.reject.bind(this);
    this.resolve = this.resolve.bind(this);
    callback(this.resolve, this.reject);
  }

  resolve(data) {
    let storedData = data; 
    try {
      this.promiseChain.forEach((nextFunction) => {
        storedData = nextFunction(storedData);
      });
    } catch (error) {
      this.promiseChain = [];
      this.reject(error);
    }
  }

  reject(error) {
    this.handleError(error); 
  }

  then(callback) {
    this.promiseChain.push(callback);
    return this;
  }

  catch(callback) {
    this.handleError = callback;
    return this;
  }

}

module.exports = CustomPromise;