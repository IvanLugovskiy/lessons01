const FuncReturnArr = (x, y) => {
  let resultArr = [];
  let i = x;
  if (x < y) {
    for (let i = x; i <= y; i++) resultArr.push(i);
  }
  if (x > y) {
    for (i = x; i >= y; i--) resultArr.push(i);
  }
  if (x == y) {
    resultArr.push(i);
  }
  return resultArr;
};

console.log(FuncReturnArr(1, 5));
console.log(FuncReturnArr(5, 1));
console.log(FuncReturnArr(5, 5));

//F(x, y) => [x … y] принимает два числа и возвращает массив со значениями от первого до второго

/* 
нейминг - myFn, myArr - привыкай сразу такого не делать, имена должны иметь смысл, позже отдельно обсудим
1) обработай случай, когда параметры равны или второй меньше первого */
