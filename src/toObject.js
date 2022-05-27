const toObject = (values) => {
  let obj = {};
  let key = values[0];
  let val = values[1];
  obj[key] = val;

  return obj;
};
