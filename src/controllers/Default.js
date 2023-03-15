import { ActionConfig, ControllerConfig } from '~/config/Controller';
export const DefaultController = new ControllerConfig({
  home: new ActionConfig('', ''),
  notfound: new ActionConfig('Not Found', '*'),
});

