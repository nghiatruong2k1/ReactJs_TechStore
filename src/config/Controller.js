import { NewObject } from './NewObject';

export class ActionConfig {
  /**
   * title:String,
   * path: String,
   * params:Object
   * }*/
  constructor(title, path, params) {
    const regex = /:[a-zA-Z]{1,}/g;
    const _this = this;
    Object.defineProperty(_this, 'title', {
      enumerable: true,
      writable: false,
      value: title,
    });
    Object.defineProperty(_this, 'getPath', {
      enumerable: false,
      value: function () {
        return path || '';
      },
    });
    Object.defineProperty(_this, 'params', {
      enumerable: false,
      value: params,
    });
    Object.defineProperty(_this, 'parent', {
      enumerable: false,
      writable: true,
    });

    Object.defineProperty(_this, 'getAction', {
      enumerable: false,
      value: function (values) {
        let str = `/${path}`;
        let parent = _this.parent;
        while (parent) {
          const parentPath = parent?.getPath();
          str = (parentPath ? '/' + parentPath : '') + str;
          parent = parent?.parent;
        }
        if (typeof str === 'string') {
          const args = str.match(regex);
          if (args && Array.isArray(args)) {
            args.forEach((arg) => {
              const key = arg.replace(':', '');
              str = str.replaceAll(
                arg,
                (values && values[key]) || params?.[key] || '',
              );
            });
          }
          return str;
        }
        return '/404';
      },
    });
  }
}
export class ControllerConfig extends NewObject {
  /**
   *
   * actions:{
   *    action:ActionConfig
   * },
   * options:{
   *    path: string,
   *    title:String
   * }*/
  constructor(actions, options = {}) {
    super({});
    const { title, path } = options;
    const _this = this;
    Object.defineProperty(_this, 'title', {
      enumerable: false,
      value: title || '',
    });
    Object.defineProperty(_this, 'parent', {
      enumerable: false,
      writable: true,
    });
    Object.defineProperty(_this, 'getPath', {
      enumerable: false,
      value: function () {
        return path || '';
      },
    });
    Object.defineProperty(_this, 'addAction', {
      enumerable: false,
      value: function (key, action) {
        if (typeof actions === 'object' && action instanceof ActionConfig) {
          _this[key] = action;
          _this[key].parent = _this;
        }
      },
    });
    Object.defineProperty(_this, 'addActions', {
      enumerable: false,
      value: function (actions) {
        typeof actions === 'object' &&
          Object.keys(actions).forEach((key) => {
            if (actions[key] instanceof ActionConfig) {
              _this[key] = actions[key];
              _this[key].parent = _this;
            }
          });
      },
    });
    _this.addActions(actions);
  }
}
export class AreaConfig extends NewObject {
  /**
   * path: string,
   * title:String
   * }*/
  constructor(path, title) {
    super({});
    const _this = this;
    Object.defineProperty(_this, 'title', {
      enumerable: false,
      value: title || '',
    });
    Object.defineProperty(_this, 'getPath', {
      enumerable: false,
      value: function () {
        return path || '';
      },
    });
  }
}
