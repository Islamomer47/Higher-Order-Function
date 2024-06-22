//Q1

//for loop
let arr = [8, 2, 3, 4];
let newarr = [];

function integers(arr) {
  for (i = 0; i < arr.length; i++) {
    let y = Math.pow(arr[i], 2);
    newarr.push(y);
  }
  return newarr;
}

integers(arr);
console.log(newarr);

//foreach
let newarr1 = [];

function integers1(arr) {
  arr.forEach((element) => {
    let y = Math.pow(element, 2);
    newarr1.push(y);
  });
  return newarr1;
}
integers1(arr);
console.log(newarr1);

//map method
let newarr2 = [];
function integers2(arr) {
  newarr2 = arr.map((element) => {
    return Math.pow(element, 2);
  });
}
integers2(arr);
console.log(newarr2);

//Q2
let arr1 = [8, "aya", 3, "Islam"];
let newarr3 = [];
function integers3(arr1) {
  arr1.map((element) => {
    if (isNaN(element)) {
      newarr3.push("N/A");
    } else {
      element % 2 == 0 ? newarr3.push("even") : newarr3.push("Odd");
    }
  });
  return newarr3;
}
integers3(arr1);
console.log(newarr3);

//Q3
let names = ["Rawan", "Wesam", "Hind", "Muhammad", "Esraa", "Dareen"];
let newarr4 = [];
names.forEach((element) => {
  newarr4.push(element);
});
console.log(newarr4);

//Q4

let numbers = [12, 4, 15, 25];
let result = [];
function fizzbuzz(numbers) {
  numbers.forEach((i) => {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("Fizz Buzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  });
  return result;
}
fizzbuzz(numbers);
console.log(result);
