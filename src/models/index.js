export const getRulers = (model) => {
  return Object.keys(model).reduce((rs, key) => {
    const rulers = model[key].rulers;
    if (rulers) {
      rs[key] = rulers;
    }
    return rs;
  }, {});
};
export const getDefaultValues = (model) => {
  return Object.keys(model).reduce((rs, key) => {
    rs[key] = model[key].defaultValue;
    return rs;
  }, {});
};
export const getValues = (model,values) => {
  return Object.keys(model).reduce((rs, key) => {
    rs[key] = values[key] || model[key].defaultValue;
    return rs;
  }, {});
};