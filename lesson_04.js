const myFn = (x) => {
  return (y) => {
    if (y > x) {
      return y;
    } else {
      return false;
    }
  };
};
let args = myFn(10)(20);
console.log(args);

/* F(x) => ff(y) => y > x
Вот тут забавно. Ф принимает число X, возвращает функцию, которая тоже принимает число Y и возвращает значение Y > X  */
