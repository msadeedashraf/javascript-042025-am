
# 💻 JavaScript Beginner Practice: Chapter 2 Strings & Numbers

This assignment is for students who have just completed learning **strings**, **numbers**, and **variables** in JavaScript. It includes practical tasks to build confidence.

---

## ✅ Problem 1: Convert a String to a Number

### 🎯 Objective:
Learn different ways to convert a string to a number in JavaScript.

### 🔹 Instructions:
Try each method below using the string `"123"` and print the result using `console.log()`.

<details>
  <summary>🔑 Click to see the solution</summary>

```javascript
// Using Number()
let num1 = Number("123");

// Using parseInt()
let num2 = parseInt("123");

// Using parseFloat()
let num3 = parseFloat("123.45");

// Using Unary +
let num4 = +"123";

console.log(num1, num2, num3, num4);
```

</details>

---

## ✅ Problem 2: Create an Array of Students and Print Their Names

### 🎯 Objective:
Learn how to create arrays and access object properties inside them.

### 🔹 Instructions:
1. Create an array of student objects. Each object should have a `name` and `age`.
2. Use a loop to print each student's name.

<details>
  <summary>🔑 Click to see the solution</summary>

```javascript
let students = [
  { name: "Ali", age: 20 },
  { name: "Sara", age: 22 },
  { name: "John", age: 19 },
  { name: "Aisha", age: 21 }
];

students.forEach(function(student) {
  console.log(student.name);
});
```

</details>

---

## ✅ Problem 3: My Personal Info Card + Simple Calculator

### 🎯 Objective:
Combine your knowledge of string and number variables, string concatenation, and math operations.

### 🔹 Part 1: Personal Info

Create variables for:

- Your name (string)
- Your age (number)
- Your favorite color (string)
- Your favorite number (number)

Print a sentence using these variables.

<details>
  <summary>🔑 Click to see the solution</summary>

```javascript
let name = "Zara";
let age = 20;
let color = "blue";
let favoriteNumber = 7;

console.log("Hi, my name is " + name + ". I am " + age + " years old. My favorite color is " + color + " and my favorite number is " + favoriteNumber + ".");
```

</details>

---

### 🔹 Part 2: Simple Math

Using your `favoriteNumber`, do the following:

- Multiply it by 2
- Add 10
- Subtract 5
- Divide it by 3

Print each result.

<details>
  <summary>🔑 Click to see the solution</summary>

```javascript
console.log("Multiplied by 2: " + (favoriteNumber * 2));
console.log("Add 10: " + (favoriteNumber + 10));
console.log("Subtract 5: " + (favoriteNumber - 5));
console.log("Divide by 3: " + (favoriteNumber / 3));
```

</details>

---

### 🔹 Part 3: Bonus Challenge (Optional)

Use `prompt()` to take input from the user.

<details>
  <summary>🔑 Click to see the solution</summary>

```javascript
let name = prompt("What is your name?");
let age = prompt("What is your age?");
console.log("Hello " + name + ", you are " + age + " years old!");
```

</details>



Happy coding! 🚀
