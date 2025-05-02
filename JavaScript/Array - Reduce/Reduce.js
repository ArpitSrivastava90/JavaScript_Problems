// Top 10 Question on Reduce  Practice them  to  get hands on Reduce Method

//* Question 1

// Given an array of orders, calculate the total amount of revenue generated from completed orders only.
// Here’s the JSON data structure:

const orders = [
  { orderId: "A001", amount: 250, status: "completed" },
  { orderId: "A002", amount: 400, status: "pending" },
  { orderId: "A003", amount: 150, status: "completed" },
  { orderId: "A004", amount: 300, status: "canceled" },
  { orderId: "A005", amount: 600, status: "completed" },
];

// Solution -->

const result1 = orders
  .filter((order) => {
    return order.status === "completed";
  })
  .reduce((acc, initalvalue) => {
    return acc + initalvalue.amount;
  }, 0);

// First i filtered completed orders and applied my reduce method to add sum of total amount

//* Question 2
// you have  given a sales Data  calculate the Total amount of each Product [  Reduce it to --> expected Output ]

const sales = [
  { product: "Laptop", amount: 1000 },
  { product: "Phone", amount: 500 },
  { product: "Laptop", amount: 700 },
  { product: "Tablet", amount: 300 },
];

// [ expected Output ]

// {
//   "Laptop": 1700,
//   "Phone": 500,
//   "Tablet": 300
// }

// Solution -->

const result2 = sales.reduce((acc, initalvalue) => {
  acc[initalvalue.product] =
    (acc[initalvalue.product] || 0) + initalvalue.amount;
  return acc;
}, {});

//* Question 3
// Suppose you have given a list of fruits your job is to find  how many fruits are there use reduce  method  to find Expected Output

const Fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

// [Expected Output]

// {
//   "apple": 3,
//   "banana": 2,
//   "orange": 1
// }

// Solution -->

const result3 = Fruits.reduce((acc, initalvalue) => {
  acc[initalvalue] = (acc[initalvalue] || 0) + 1;
  return acc;
}, {});

//* Question 4

//  you have given list of users reduce it as Expected  format
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

// [ Expected  format ]

// {
//   "1": { "id": 1, "name": "Alice" },
//   "2": { "id": 2, "name": "Bob" },
//   "3": { "id": 3, "name": "Charlie" }
// }

// Solution -->

const result4 = users.reduce((acc, initalvalue) => {
  acc[initalvalue.id] = initalvalue;
  return acc;
}, {});

//* Question 5
// Given an array of students with their subjects, use reduce() to group students based on their subjects.
const students = [
  { name: "Amit", subject: "Math" },
  { name: "Priya", subject: "Science" },
  { name: "Rahul", subject: "Math" },
  { name: "Sonia", subject: "English" },
  { name: "Karan", subject: "Science" },
];

// [Expected Output]

// {
//     Math: ["Amit", "Rahul"],
//     Science: ["Priya", "Karan"],
//     English: ["Sonia"]
//   }

// Solution -->

const result5 = students.reduce((acc, initalvalue) => {
  acc[initalvalue.subject] = acc[initalvalue.subject] || []; // for the first iteration it will inital the array
  acc[initalvalue.subject].push(initalvalue.name);
  return acc;
}, {});

//* Question 6
// Convert a nested array into a flat array using reduce()  and  without using reduce Method

const nestedArray = [[1, 2], [3, 4, 5], [6], [7, 8, 9]];

// Expected Output
// [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Solution -->

// With Reduce
const FlatedArray = nestedArray.reduce((acc, val) => {
  return acc.concat(val);
}, []);

// without reduce
const FlattenArray = nestedArray.flatMap((val) => {
  return val;
});

//* Question 7
// Similar to Question 2 calculate the total expenses  according to category
const expenses = [
  { category: "Food", amount: 50 },
  { category: "Transport", amount: 30 },
  { category: "Food", amount: 20 },
  { category: "Shopping", amount: 100 },
  { category: "Transport", amount: 50 },
];

// Expected Output
// {
//     Food: 70,
//     Transport: 80,
//     Shopping: 100
//   }

// Solution -->

const result7 = expenses.reduce((acc, val) => {
  acc[val.category] = (acc[val.category] || 0) + val.amount;
  return acc;
}, {});

//* Question 8
// Find the largest word in the  array using reduce
const words = ["elephant", "dog", "hippopotamus", "cat", "giraffe"];

// Expected Output  --> hippopotamus

// Solution -->

const result8 = words.reduce((acc, val) => {
  return val.length > acc.length ? val : acc;
}, "");

//* Question 9
// Convert an array of objects into a nested object where each key is a category
//  and its value is another object with product names as keys and their price as values.

const items = [
  { category: "Electronics", product: "Laptop", price: 1000 },
  { category: "Electronics", product: "Phone", price: 500 },
  { category: "Furniture", product: "Chair", price: 200 },
  { category: "Furniture", product: "Table", price: 300 },
];

// Expected output
//   {
//     Electronics: { Laptop: 1000, Phone: 500 },
//     Furniture: { Chair: 200, Table: 300 }
//   }

// Solution -->

const result9 = items.reduce((acc, val) => {
  acc[val.category] = acc[val.category] || {};
  acc[val.category][val.product] = val.price;
  return acc;
}, {});

// *question  10
// Given an array, find the most frequently occurring element using reduce().

const arr = [3, 7, 3, 2, 7, 7, 1, 3, 3, 7, 2];

// Solution -->
const mostFrequent = arr.reduce(
  (acc, val) => {
    acc.counts[val] = (acc.counts[val] || 0) + 1; // Count occurrences

    if (acc.counts[val] > acc.count) {
      acc.count = acc.counts[val]; // Update max count
      acc.element = val; // Update most frequent element
    }

    return acc;
  },
  { counts: {}, count: 0, element: null }
).element;

console.log(mostFrequent);

// -----> Advance level

//* Question 11

const orders1 = [
  {
    id: 1,
    customer: "Alice",
    items: [{ product: "apple", quantity: 2, price: 3 }],
  },
  {
    id: 2,
    customer: "Bob",
    items: [
      { product: "banana", quantity: 1, price: 2 },
      { product: "apple", quantity: 1, price: 3 },
    ],
  },
  {
    id: 3,
    customer: "Alice",
    items: [{ product: "orange", quantity: 3, price: 1 }],
  },
];

// Output

// {
//   Alice: {
//     totalSpent: 9,       // (2*3 + 3*1)
//     orders: [1, 3]
//   },
//   Bob: {
//     totalSpent: 5,       // (1*2 + 1*3)
//     orders: [2]
//   }
// }

const result11 = orders1.reduce((acc, curr) => {
  const { id, customer, items } = curr;
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (!acc[customer]) {
    acc[customer] = {
      totalspent: total,
      orders: [id],
    };
  } else {
    acc[customer].totalspent += total;
    acc[customer].orders.push(id);
  }

  return acc;
}, {});

//* Question 12

// Flatten an array of users’ tags and return a deduplicated list of all used tags.
const users1 = [
  { id: 1, tags: ["js", "react"] },
  { id: 2, tags: ["node", "express", "js"] },
  { id: 3, tags: ["react", "node"] },
];

// expected output
// ["js", "react", "node", "express"]

// const result12 = users1.reduce((acc, curr) => {
//   acc.push(...curr.tags);
//   return acc.filter((val, indx, arr) => arr.indexOf(val) === indx);   ---> Slow
// }, []);

const result12 = Array.from(
  (uniqueArray = users1.reduce((acc, val) => {
    val.tags.forEach((tag) => acc.add(tag));
    return acc;
  }, new Set()))
);

let res = Array.from({ length: 4 }, (_, i) => i);


