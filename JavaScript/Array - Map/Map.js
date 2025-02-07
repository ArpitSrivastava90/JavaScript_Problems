//! Map -- Method  Questions Top 10

//* Question 1
// Transforming API Response Data:
// Given an API response of user data:

const apiResponse = [
  { user_id: 1, user_info: { name: "Alice", age: 25, city: "New York" } },
  { user_id: 2, user_info: { name: "Bob", age: 30, city: "San Francisco" } },
];

// output
// [
//   { id: 1, name: "Alice", location: "New York" },
//   { id: 2, name: "Bob", location: "San Francisco" },
// ];

// Solution -->

let Result1 = apiResponse.map((val, indx) => {
  return {
    id: val.user_id,
    name: val.user_info.name,
    location: val.user_info.city,
  };
});

//* Question 2
//  You  Give  a Product set of array convert it in the expected Output

const products = [
  { id: 1, name: "Monitor", price: 300 },
  { id: 2, name: "Keyboard", price: 100 },
  { id: 3, name: "Mouse", price: 50 },
];

//   expected Output --> ["Monitor: $300", "Keyboard: $100", "Mouse: $50"];

// Solution -->

let result2 = products.map((val, indx) => {
  return `${val.name} : $${val.price}`;
});

//* Question 3
// you have give list of orders , transform this into expected output

const orders = [
  {
    orderId: 101,
    items: [
      { name: "Laptop", price: 1200 },
      { name: "Bag", price: 80 },
    ],
  },
  { orderId: 102, items: [{ name: "Phone", price: 800 }] },
];

//Expected  output -->  [["Laptop", "Bag"], ["Phone"]];

// Solution -->

let result3 = orders.map((val) => {
  return val.items.map((val) => {
    return val.name;
  });
});

//! [important]

//* Question 4

//  You have an array of arrays, where each sub-array contains the name and age of a person.
//  Use map() to transform each sub-array into an object with name and age properties.

const people = [
  ["John", 28],
  ["Jane", 24],
  ["Sam", 35],
];

// Expected Output

// [
//   { name1: "John", age: 28 },
//   { name1: "Jane", age: 24 },
//   { name1: "Sam", age: 35 },
// ];

// Solution -->

let result4 = people.map((value) => {
  const [name1, age] = value;
  return { name1, age };
});

// *Question 5
// you are given with departments Array , Trasnfrom these into Expected OutPut

const departments = [
  { departmentName: "Engineering", employees: ["Alice", "Bob"] },
  { departmentName: "Marketing", employees: ["Charlie", "Dave"] },
];

// Expected OutPut

// [
//   { name: "Alice", department: "Engineering" },
//   { name: "Bob", department: "Engineering" },
//   { name: "Charlie", department: "Marketing" },
//   { name: "Dave", department: "Marketing" },
// ];

// Solution -->

// uses the Concept of FlatMap   [ [1], [2], [3] ] = [1,2,3]

let result5 = departments.flatMap((val) =>
  val.employees.map((value) => {
    return { name: value, department: val.departmentName };
  })
);
console.log(result5);

//* Question 6
//  Given an array of mixed data (strings and numbers),
//  filter out non-numeric elements, then map each remaining number to its double.

const mixedData = [1, "hello", 2, "world", 3, "js", 4, "code"];

// Solution -->

let result6 = mixedData
  .filter((val) => {
    return typeof val === "number";
  })
  .map((val) => {
    return val * 2;
  });
console.log(result6);

//* Question 7
// You Have given SalesData TrasnForm it in the expected output

const salesData = [
  { product: "Laptop", quantity: 3, price: 1000 },
  { product: "Phone", quantity: 5, price: 500 },
  { product: "Tablet", quantity: 2, price: 600 },
];

// Expected Output

// [
//   { product: "Laptop", total: 3000 },
//   { product: "Phone", total: 2500 },
//   { product: "Tablet", total: 1200 },
// ];

// Solution -->

let result7 = salesData.map((val) => {
  return { product: val.product, total: val.quantity * val.price };
});

console.log(result7);

//* Question 8
// you  have given employees and departmentcode , merge them and transformthem into Expected OutPut

const employees = [
  { name: "Alice", department: "HR" },
  { name: "Bob", department: "Engineering" },
  { name: "Charlie", department: "Marketing" },
];

const departmentCode = {
  HR: "HR001",
  Engineering: "ENG002",
  Marketing: "MKT003",
};

// Expected  Output

// [
//   { name: "Alice", department: "HR", departmentCode: "HR001" },
//   { name: "Bob", department: "Engineering", departmentCode: "ENG002" },
//   { name: "Charlie", department: "Marketing", departmentCode: "MKT003" },
// ];

let result8 = employees.map((val) => {
  return {
    name: val.name,
    department: val.department,
    departmentCode: departmentCode[val.department],
  };
});

console.log(result8);

//* Question 9
//  you have given a productdata , now make  discount of 10% on the each  price of data and produce an expected output

const products1 = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 600 },
];

// Expected Output

// [
//   { name: "Laptop", price: 1000, discountedPrice: 900 },
//   { name: "Phone", price: 500, discountedPrice: 450 },
//   { name: "Tablet", price: 600, discountedPrice: 540 },
// ];

let result9 = products1.map((val) => {
  return { name: val.name, price: val.price, discountedPrice: val.price * 0.9 };
});
console.log(result9);

//* Question 10
// you have given with orderData use map method and transform the data into Expected Output

const ordersData = [
  { orderId: 1, items: ["Laptop", "Mouse"] },
  { orderId: 2, items: ["Phone", "Charger"] },
  { orderId: 3, items: ["Tablet", "Keyboard"] },
];

// Expected Output

// [
//   { orderId: 1, item: "Laptop" },
//   { orderId: 1, item: "Mouse" },
//   { orderId: 2, item: "Phone" },
//   { orderId: 2, item: "Charger" },
//   { orderId: 3, item: "Tablet" },
//   { orderId: 3, item: "Keyboard" },
// ];

let result10 = ordersData.flatMap((val) =>
  val.items.map((value) => {
    return { orderId: val.orderId, item: value };
  })
);
console.log(result10);
