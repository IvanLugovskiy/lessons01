function ResultRepeet(x) {
  x = x.sort();
  let len = x.length;
  let count = 1;
  let tmpcount = 0;
  let showelem;

  for (i = 0; i < len; i++) {
    for (m = 0; m < len; m++) {
      if (x[i] === x[m]) {
        tmpcount++;
      }
      if (count < tmpcount) {
        count = tmpcount;
        showelem = x[i];
      }
    }
    tmpcount = 0;
  }
  console.log(count, showelem);
  return count, showelem;
}
exArray = [1, 2, 1, 3, 1, 4];
exArray1 = [1, 2, 1, 3, 1, 4, 3, 1, 3, 3, 3, 5];
ResultRepeet(exArray);
ResultRepeet(exArray1);

//F([1,2,1,3,1,4]) => {count:3, value:1}наибольшее количество повторений числа в массиве и само число
