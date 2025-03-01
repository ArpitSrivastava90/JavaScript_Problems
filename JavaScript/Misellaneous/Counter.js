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

// * Good Questions
// Question
// suppose you are given with the array that contains numbers ,your job is to find out that which number has occurred the most
