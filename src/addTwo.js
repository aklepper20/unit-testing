const addTwo = (n1 = 0, n2 = 0) => {
  if (typeof n1 !== "number" || typeof n2 !== "number") return 0;
  return n1 + n2;
};
