const DEVSERVER = Symbol('application#devserver');

export default {
  get devServer() {
    return this[DEVSERVER];
  },
  set devServer(value) {
    this[DEVSERVER] = value;
  },
};
