const canbePalindrome = (str) => {
  let orign = str;
  let arr = [];
  arr = str.split("").reverse().join("");
  if (arr === orign) {
    console.log(`string - ${orign} is Palindrome`);
  } else {
    console.log(`string - ${orign} is not Palindrome`);
  }
  return console.log(arr, orign);
};

canbePalindrome("abcba");
canbePalindrome("test");

//F(‘test’) => false
//F(‘abcba’) => true
//Является ли строка палиндромом
