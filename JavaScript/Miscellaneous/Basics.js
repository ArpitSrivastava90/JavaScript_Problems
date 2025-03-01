// These Questions majorly  uses the Concept of SetTimeout , setTimeInterval and slightly Loops
// * Basic Practice [ Call the functions  to test ]

// Question 1
// Create a Basic Counter and CountDown Function

// Solution -->

// Counter

let Counter = (Start, Stop) => {
  let count = Start;
  let itervalForCount = setInterval(() => {
    console.log(count);
    count++;
    if (count > Stop) clearInterval(itervalForCount);
  }, 1000);
};

// CountDown

let CountDown = (start, stops) => {
  let count = start;
  let itervalForCountdown = setInterval(() => {
    console.log(count);
    count--;
    if (count < stops) clearInterval(itervalForCountdown);
  }, 1000);
};

// Question 2
// Count   the  number of times a number has been repeated take Target number for an ease

let arr = [1, 1, 1, 1, 2, 3];

const CountNumberTimes = (arr, target) => {
  let count = 0;
  for (let num of arr) {
    if (target === num) count++;
  }

  return console.log(count);
};

// * Good Questions

// Question 3
// suppose you are given with the array that contains numbers ,your job is to find out that which number has occurred the most

let array = [1, 2, 4, 5, 6, 7, 6, 8, 6, 6, 9, 10, 6, 10];

const FindtheMostOccuredNumber = (array) => {
  let Count = {};
  let MaxNum = array[0];
  let MaxCount = 0;
  for (let num of array) {
    Count[num] = (Count[num] || 0) + 1;
    if (Count[num] > MaxCount) {
      MaxCount = Count[num];
      MaxNum = num;
    }
  }
  return console.log(MaxNum);
};

//*  [ Good Level ]
//*   Question 4
// Create a CountDown Function that takes delay of its  own times Example
// 5 prints after  5 sec
// 4 Prints  after 4 sec and so on ...

// Solution

function CountDownwithDelay(start) {
  if (start < 0) return;
  setTimeout(() => {
    console.log(start);
    CountDownwithDelay(start - 1);
  }, start * 1000);
}

// Bonus -->  why we Dont have to define a  DataType in js while declaring a  variable  ?
//? answer --> Because JavaScript is a dynamically and loosely typed language, it doesn't require a datatype during declaration.
//?            This may cause bugs to be introduced, which is why we use TypeScript
