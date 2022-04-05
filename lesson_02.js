function repeatNumber(numArr) {
  let resultcountnum = numArr.reduce(function (Objectresult, value) {
    if ((Objectresult[value] = Objectresult[value])) {
      Objectresult[value]++;
    } else {
      Objectresult[value] = 1;
    }
    return Objectresult;
  }, {});
  console.log(resultcountnum);
  let objectinarray = Object.entries(resultcountnum);
  console.log(objectinarray);
  sortedobjectarray = objectinarray.sort((a, b) => b[1] - a[1]);
  sortedobjectarray.length = 1;
  const finalcountvalue = sortedobjectarray[0];
  const finalvalue = finalcountvalue[0];
  const finalcount = finalcountvalue[1];
  console.log(`the most frequent value is ${finalvalue} count ${finalcount}`);
  return finalcountvalue;
}

numArr = [1, 2, 1, 3, 1, 4, 3, 4, 5];

repeatNumber(numArr);

//F([1,2,1,3,1,4]) => {count:3, value:1}наибольшее количество повторений числа в массиве и само число

/* Нейминг - функции с маленькой буквы, используем строго camelCase,
имя самой функции желательно делать глаголом. Представь, что это команда, которую ты даёшь, она должна читаться

Задача максимум - решить без второго цикла:)

Задача минимум - уменьшить число лишних операций. Для массива из 6 элементов
ты делаешь 36 сравнений, это n^2, а можно за n!, факториал, то бишь */
