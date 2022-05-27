const swapChars = (firstIdx, secondIdx, str) => {
  let newArr = str.split("");

  let first = newArr[firstIdx];
  let second = newArr[secondIdx];

  newArr[firstIdx] = second;
  newArr[secondIdx] = first;

  str = newArr.join("");

  return str;
};
