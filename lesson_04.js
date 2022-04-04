const funcreturnlogicvalue = (x) => {
  return (y) => {
    return y > x;
  };
};
let args = funcreturnlogicvalue(30)(40);
console.log(args);

/* F(x) => ff(y) => y > x
Вот тут забавно. Ф принимает число X, возвращает функцию, которая тоже принимает число Y и возвращает значение Y > X  */

/* нейминг - funcreturnlogicvalue, myArr - привыкай сразу такого не делать, имена должны иметь смысл, позже отдельно обсудим
4) возвращаться должен boolean; и попробуй обойтись без ифов, они не приносят там пользы */
