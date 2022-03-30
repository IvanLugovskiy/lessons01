//F(‘test’) => false
//F(‘abcba’) => true
//Является ли строка палиндромом

/* нейминг - myFn, myArr - привыкай сразу такого не делать, имена должны иметь смысл, позже отдельно обсудим
3) может быть дорого и неоптимально, но формально работает:) попробуй работать со строкой как с массивом */

function palindrome(str) {
  let len = str.length;
  for (let i = 0; i < len / 2; i++)
    if (str[i] != str[len - i - 1]) {
      return false;
    }
  return true;
}
console.log(palindrome("abcba")); // true
console.log(palindrome("test")); // false
console.log(palindrome("work")); // false
