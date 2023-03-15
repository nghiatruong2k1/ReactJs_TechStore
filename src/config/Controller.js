import { NewObject } from './NewObject';

export class ActionConfig {
  /**
   * title:String,
   * path: String,
   * page:Component,
   * options:{
   *      params:Object,
   *
   *      layout:Component
   * }*/
  constructor(title, path, page, options = {}) {
    const regex = /:[a-zA-Z]{1,}/g;
    const { params, layout } = options;
    const _this = this;
    Object.defineProperty(_this, 'title', {
      enumerable: true,
      writable: false,
      value: title,
    });
    Object.defineProperty(_this, 'path', {
      enumerable: true,
      writable: false,
      value: path,
    });
    Object.defineProperty(_this, 'params', {
      enumerable: false,
      value: params,
    });
    Object.defineProperty(_this, 'parent', {
      enumerable: false,
      writable: true,
    });
    Object.defineProperty(_this, 'getPage', {
      enumerable: false,
      value: function () {
        return page;
      },
    });
    Object.defineProperty(_this, 'getLayout', {
      enumerable: false,
      value: function () {
        return layout !== undefined
          ? layout
          : _this?.parent?.getLayout && _this.parent.getLayout();
      },
    });
    Object.defineProperty(_this, 'getAction', {
      enumerable: false,
      value: function (values) {
        let str = `/${path}`;
        let parent = _this.parent;
        while (parent) {
          const parentPath = parent?.path;
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
   *    page:Component,
   *    layout:Component
   * }*/
  constructor(actions, options = {}) {
    super({});
    const { title, path, page, layout } = options;
    const _this = this;
    Object.defineProperty(_this, 'title', {
      enumerable: false,
      value: title || '',
    });
    Object.defineProperty(_this, 'parent', {
      enumerable: false,
      writable: true,
    });
    Object.defineProperty(_this, 'path', {
      enumerable: false,
      value: path || '',
    });
    Object.defineProperty(_this, 'getPage', {
      enumerable: false,
      value: function () {
        return page;
      },
    });
    Object.defineProperty(_this, 'getLayout', {
      enumerable: false,
      value: function () {
        return layout !== undefined
          ? layout
          : _this?.parent?.getLayout && _this.parent.getLayout();
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
   *
   * controllers:{
   *    controller:ControllerConfig
   * },
   * options:{
   * path: string,
   *    title:String
   * }*/
  constructor(path, options = {}) {
    super({});
    const _this = this;
    const { title, page, layout } = options;
    Object.defineProperty(_this, 'title', {
      enumerable: false,
      value: title || '',
    });
    Object.defineProperty(_this, 'path', {
      enumerable: false,
      value: path || '',
    });
    Object.defineProperty(_this, 'getPage', {
      enumerable: false,
      value: function () {
        return page;
      },
    });
    Object.defineProperty(_this, 'getLayout', {
      enumerable: false,
      value: function () {
        return layout !== undefined
          ? layout
          : _this?.parent?.getLayout && _this.parent.getLayout();
      },
    });
  }
}
