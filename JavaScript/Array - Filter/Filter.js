// The below code contains one of best filter questions from array and json  data practice them without looking at the solution

//* Question 1
// You have an array of email addresses.
// Write a function to filter and return all the emails that belong to the domain example.com.

const emails = [
  "john@example.com",
  "jane@otherdomain.com",
  "admin@example.com",
  "info@company.com",
];

// Solution -->

// Method 1

let EmailFinder = (emails) => {
  return emails.filter((val) => {
    return val.endsWith("@example.com");
  });
};

//Method 2

// let EmailFinder = (emails) => {
//   return emails.filter((val) => {
//     return val.slice(val.indexOf("@")) === "@example.com";
//   });
// };

let result1 = EmailFinder(emails);
console.log(result1);

//*  Question 2
// you are given with some sort of coupons Data FilterOut the expired Coupons {Adjusts the date by yourself kindly }

const coupons = [
  { code: "SAVE10", expiryDate: "2025-1-01" },
  { code: "WELCOME20", expiryDate: "2025-10-31" },
  { code: "FREESHIP", expiryDate: "2025-02-15" },
  { code: "KR$NA", expiryDate: "2025-01-15" },
];

// Solution -->

let Today = new Date();
let FreshCoupons = coupons.filter((val) => {
  let notExpired = new Date(val.expiryDate);
  return notExpired > Today;
});

console.log(FreshCoupons);

//* Question 3

// Given an array of project objects:
// Filter  in the   projects where the deadline is within the next 7 days.

const projects = [
  { name: "Project A", deadline: "2025-02-08" },
  { name: "Project B", deadline: "2025-02-09" },
  { name: "Project C", deadline: "2025-02-09" },
  { name: "Project D", deadline: "2025-02-17" },
];

// Solution -->

let NextSevenDays = new Date(Today);
NextSevenDays.setDate(Today.getDate() + 7);

let result3 = projects.filter((val) => {
  let deadline = new Date(val.deadline);
  return deadline < NextSevenDays;
});
console.log(result3);

//* Question 4

// Given an array of employee sales data:
// Filter in the  employees whose average monthly sales exceed 3000.

const sales = [
  { employee: "Alice", monthlySales: [2000, 3000, 4000] },
  { employee: "Bob", monthlySales: [1000, 1500, 1800] },
  { employee: "Charlie", monthlySales: [3000, 4000, 5000] },
  { employee: "David", monthlySales: [1200, 1700, 2500] },
];

// Solution -->

let result4 = sales.filter((val) => {
  return val.employee
    ? val.monthlySales.reduce((acc, init) => {
        return acc + init;
      }, 0) /
        val.monthlySales.length >
        3000
    : null;
});

console.log(result4);

//* Question 5
// Filter in orders containing at least one item priced above 500.

const orders = [
  {
    orderId: 101,
    items: [
      { name: "Laptop", price: 1000 },
      { name: "Mouse", price: 50 },
    ],
  },
  {
    orderId: 102,
    items: [
      { name: "Keyboard", price: 75 },
      { name: "Monitor", price: 200 },
    ],
  },
  {
    orderId: 103,
    items: [
      { name: "Phone", price: 800 },
      { name: "Charger", price: 600 },
    ],
  },
];

// solution -->
// Uses Some Conecpts also

const filteredOrders = orders.filter((order) =>
  order.items.some((item) => item.price > 500)
);

console.log(filteredOrders);

//! [important]
//* Question 6
// Filter in those student whose marks are greater than 50 in all the subjects
// click --> uses Object.values to convert object  into an array

const students = [
  { name: "Alice", marks: { math: 80, english: 70, science: 85 } },
  { name: "Bob", marks: { math: 40, english: 50, science: 60 } },
  { name: "Charlie", marks: { math: 75, english: 65, science: 55 } },
];

let result6 = students.filter((val) => {
  return Object.values(val.marks).every((mark) => mark > 50);
});
console.log(result6);

//* Question 7
// you have given an array and a target element , you have to find the number of occurence
// of that target element in that array using filter

let array = [1, 23, 43, 56, 44, 3, 55, 23, 23, 23, 23];
let target = 23;

// Solution -->

let result7 = array.filter((value) => {
  return value === target;
}).length;
console.log(result7);

//* Question 8
// 💡 Scenario: In an e-commerce system,
//  we need to find all orders that contain at least one item from a specific category (e.g., "Electronics").it should only display orderId

const orders1 = [
  {
    orderId: 1,
    items: [
      { name: "Laptop", category: "Electronics" },
      { name: "Bag", category: "Fashion" },
    ],
  },
  {
    orderId: 2,
    items: [
      { name: "Shoes", category: "Fashion" },
      { name: "Watch", category: "Accessories" },
    ],
  },
  {
    orderId: 3,
    items: [
      { name: "Smartphone", category: "Electronics" },
      { name: "Charger", category: "Accessories" },
    ],
  },
];

// Expected Output (for category: "Electronics")

// Solution -->

let result8 = orders1
  .filter((val) => {
    return val.items.some((category) => category.category === "Electronics");
  })
  .map((val) => {
    return { orderId: val.orderId };
  });

console.log(result8);

//* Question 9
// : A financial app needs to filter out  high-value transactions that are either pending or failed.

const transactions = [
  { id: 1, amount: 5000, status: "completed" },
  { id: 2, amount: 12000, status: "pending" },
  { id: 6, amount: 4000, status: "pending" },
  { id: 3, amount: 7000, status: "failed" },
  { id: 4, amount: 4000, status: "completed" },
  { id: 5, amount: 15000, status: "pending" },
];

let MinAmount = 6000;
let result9 = transactions.filter((val) => {
  return val.status != "completed" && val.amount > MinAmount;
});
console.log(result9);

// Question 10

// A ride-hailing service wants to filter rides where:

// The trip distance is at least 10 km.
// The user rating is 4.5 or above.
// The ride must have at least one payment method enabled (like "credit card", "wallet", etc.).

const rides = [
  { id: 1, distance: 15, rating: 4.7, paymentMethods: ["credit card"] },
  { id: 2, distance: 5, rating: 4.9, paymentMethods: ["wallet"] },
  { id: 3, distance: 12, rating: 4.3, paymentMethods: [] },
  { id: 4, distance: 20, rating: 4.8, paymentMethods: ["credit card", "cash"] },
  { id: 5, distance: 8, rating: 4.6, paymentMethods: ["debit card"] },
];

let result10 = rides.filter((conditions) => {
  return (
    conditions.distance > 10 &&
    conditions.rating > 4.5 &&
    conditions.paymentMethods.some(
      (payment) => payment === "credit card" || payment === "wallet"
    )
  );
});

console.log(result10);

