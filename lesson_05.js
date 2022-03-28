const incFunc = (x) => {
  return x * 2;
};

const FuncReturnArr = (x, y) => {
  let ResFuncArr = [];
  y.forEach((element) => {
    x(element);
    ResFuncArr.push(x(element));
  });
  console.log(ResFuncArr);
  return ResFuncArr;
};

let inputArray = [5, 5, 2, 4, 5, 10];

FuncReturnArr(incFunc, inputArray);

/* F( ff(x), [y…z] ) => [ ff(y) … ff(z) ]
Ф принимает ф и массив чисел, возвращает массив результатов выполнения функции на каждом из значений массива */
