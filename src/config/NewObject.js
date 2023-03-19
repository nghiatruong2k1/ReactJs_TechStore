export class NewObject extends Object {
  constructor(props, privateProps) {
    super(props);
    const _this = this;
    if (typeof props === 'object') {
      Object.keys(props).forEach((key) => {
        _this[key] = props[key];
      });
    }
    if (typeof privateProps === 'object') {
      Object.keys(privateProps).forEach((key) => {
        Object.defineProperty(_this, key, {
          enumerable: false,
          value: privateProps[key],
        });
      });
    }
    Object.defineProperty(_this, 'map', {
      enumerable: false,
      value: function (callback) {
        return Object.keys(this).map((key) => {
          /** value:any,
           * key:string,
           * this:object
           * */
          return callback(this[key], key, this);
        });
      },
    });
    Object.defineProperty(_this, 'forEach', {
      enumerable: false,
      value: function (callback) {
        return Object.keys(this).forEach((key) => {
          /** value:any,
           * key:string,
           * this:object
           * */
          callback(this[key], key, this);
        });
      },
    });
    Object.defineProperty(_this, 'reduce', {
      enumerable: false,
      value: function (callback, result) {
        return Object.keys(this).reduce((rs, key) => {
          /** value:any,
           * key:string,
           * this:object
           * */
          return callback(rs, this[key], key, this);
        }, result);
      },
    });
  }
}
