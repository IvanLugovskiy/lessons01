const multiplyFunc = (x) => {
  return x * 2;
};

const returnArrayMultiply = (multiplyFunc, inputArray) => {
  let ResFuncArr;
  ResFuncArr = inputArray.map(multiplyFunc);

  console.log(ResFuncArr);
  return ResFuncArr;
};

let inputArray = [20, 5, 2, 4, 5, 10];

returnArrayMultiply(multiplyFunc, inputArray);

/* F( ff(x), [y…z] ) => [ ff(y) … ff(z) ]
Ф принимает ф и массив чисел, возвращает массив результатов выполнения функции на каждом из значений массива */
