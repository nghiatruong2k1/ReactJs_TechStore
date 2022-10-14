export const getRulers = (model) => {
  return Object.keys(model).reduce((rs, key) => {
    rs[key] = model[key].rulers;
    return rs;
  }, {});
};