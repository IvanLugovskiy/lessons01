const funcReturnArrNum = (x, y) => {
  const resultArrNum = [];
  const subx = x;
  const suby = y;

  if (x < y) {
  } else {
    x = y;
    y = subx;
  }
  for (let i = x; i <= y; i++) resultArrNum.push(i);
  if (subx > suby) {
    resultArrNum.reverse();
  }
  return resultArrNum;
};

console.log(funcReturnArrNum(1, 5));
console.log(funcReturnArrNum(5, 1));
console.log(funcReturnArrNum(5, 5));
console.log(funcReturnArrNum(10, 5));
console.log(funcReturnArrNum(5, 10));

//F(x, y) => [x … y] принимает два числа и возвращает массив со значениями от первого до второго

/* 
нейминг - myFn, myArr - привыкай сразу такого не делать, имена должны иметь смысл, позже отдельно обсудим
1) обработай случай, когда параметры равны или второй меньше первого */

/* много лишнего наворотил, два цикла одинаковые, некрасиво, можно проще

если решил всегда идти от большего к меньшему - посмотри, как избавиться от одного цикла

Если коротко - тебя интересует только направление от х до у

Это важная штука вообще: если куски кода выглядят одинаковыми - что-то пошло не так, поленился найти хорошее решение */
