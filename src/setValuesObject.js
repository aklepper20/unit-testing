const setValue = (obj, key, val) => {
  const object = (obj[key] = val);
  return obj;
};
