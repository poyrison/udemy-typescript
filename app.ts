const Test = (sum1: number, sum2: number) => {
  const result = sum1 + sum2;
  try {
    return alert(result);
  } catch (err) {
    return alert(err);
  }
};
