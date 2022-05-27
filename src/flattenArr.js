const flatten = (arr) => {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let m = 0; m < arr[i].length; m++) {
        newArr.push(arr[i][m]);
      }
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
