const getKeys = (obj) => {
  let keys = [];
  for (let key in obj) {
    keys.push(key);
  }
  return keys;
};
