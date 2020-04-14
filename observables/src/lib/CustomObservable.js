
class Observer {

  constructor(handlers) {
    this._handlers = handlers;
    this.isCompleted = false;
  }

  next(data) {
    if (this._handlers[0] && !this.isCompleted) {
      this._handlers[0](data);
    }
  }

  complete(data) {
    if (this._handlers[1] && !this.isCompleted) {
      this._handlers[1](data);
    }
    this.isCompleted = true;
  }

  error(error) {
    if (this._handlers[2] && !this.isCompleted) {
      this._handlers[2](error);
    }
    this.isCompleted = true;
  }

}

class CustomObservable {

  constructor(executionFuction) {
    this._excutionFunction = executionFuction;
  }

  subscribe(...handlers) {

    const observer = new Observer(handlers);
    this._excutionFunction(observer);
  }

}

exports.CustomObservable = CustomObservable;