const myFn = (x, y) => {
  let myArr = [];
  for (let res = x; res <= y; res++) {
    myArr.push(res);
  }
  return myArr;
};
console.log(myFn(5, 12));

//F(x, y) => [x … y] принимает два числа и возвращает массив со значениями от первого до второго
