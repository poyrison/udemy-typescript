const add = (n1: number, n2: number) => {
  return n1 + n2;
};

const printResult = (num: number): void => {
  console.log("Result: " + num);
};

const addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
  const result = n1 + n2;
  cb(result);
};

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;

combineValues = add; // 변수를 통해 함수를 실행 할 수 있음

console.log(combineValues(8, 6));

addAndHandle(10, 20, (result) => {
  console.log(result);
});
