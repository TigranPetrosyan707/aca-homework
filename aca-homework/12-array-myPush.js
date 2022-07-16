Array.prototype.myPush = function (...items) {
  this[this.length - 1 + 1] = items;
  return this;
};
