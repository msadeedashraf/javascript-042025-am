# 📘 JavaScript Beginner Practice: Chapter 3 - Decisions, Loops, and Functions

This chapter introduces **if-else conditions**, **loops**, and **functions** in JavaScript. These assignments will help you develop problem-solving skills using control flow.

---

## ✅ Problem 1: Even or Odd Number Checker

### 🎯 Objective:
Use `if-else` to determine if a number is even or odd.

### 🔹 Instructions:
- Create a variable `number`.
- Use an if-else condition to check if the number is even or odd.
- Print the result.

<details>
  <summary>🔑 Click to see the solution</summary>

```javascript
let number = 7;

if (number % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}
```

</details>

---

## ✅ Problem 2: Grade Calculator

### 🎯 Objective:
Use multiple conditions (`if-else if`) to assign a grade based on a test score.

### 🔹 Instructions:
- Create a variable `score`.
- Use conditions to print grades:
  - 90 and above: A
  - 80-89: B
  - 70-79: C
  - 60-69: D
  - Below 60: F

<details>
  <summary>🔑 Click to see the solution</summary>

```javascript
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}
```

</details>

---

## ✅ Problem 3: Multiplication Table (Using Loop)

### 🎯 Objective:
Use a `for` loop to print the multiplication table of any number.

### 🔹 Instructions:
- Create a variable `num`.
- Print the multiplication table from 1 to 10 using a loop.

<details>
  <summary>🔑 Click to see the solution</summary>

```javascript
let num = 5;

for (let i = 1; i <= 10; i++) {
  console.log(num + " x " + i + " = " + (num * i));
}
```

</details>

---

## ✅ Problem 4: Count Down Timer (Using While Loop)

### 🎯 Objective:
Use a `while` loop to count down from a given number to 1.

<details>
  <summary>🔑 Click to see the solution</summary>

```javascript
let count = 10;

while (count > 0) {
  console.log(count);
  count--;
}
```

</details>

---

## ✅ Problem 5: Function to Add Two Numbers

### 🎯 Objective:
Create and call a function that adds two numbers.

<details>
  <summary>🔑 Click to see the solution</summary>

```javascript
function add(a, b) {
  return a + b;
}

let result = add(4, 7);
console.log("The sum is: " + result);
```

</details>

---

## ✅ Problem 6: Function to Check if Number is Positive or Negative

### 🎯 Objective:
Write a function that takes a number and prints whether it's positive, negative, or zero.

<details>
  <summary>🔑 Click to see the solution</summary>

```javascript
function checkNumber(num) {
  if (num > 0) {
    console.log("Positive");
  } else if (num < 0) {
    console.log("Negative");
  } else {
    console.log("Zero");
  }
}

checkNumber(-5);
```

</details>




<details>
  <summary>🔑 Click to see the solution</summary>

```javascript
function calculate() {
        var num1 = document.getElementById("number1").value;
        var num2 = document.getElementById("number2").value;
        var method = document.getElementById("operator").value;

        switch (method) {
          case "A":
            document.getElementById("result").innerHTML = add(
              parseFloat(num1),
              parseFloat(num2)
            );
            break;
          case "M":
            document.getElementById("result").innerHTML = multiply(
              parseFloat(num1),
              parseFloat(num2)
            );
            break;
          case "S":
            document.getElementById("result").innerHTML = subtract(
              parseFloat(num1),
              parseFloat(num2)
            );
            break;
          case "D":
            document.getElementById("result").innerHTML = divide(
              parseFloat(num1),
              parseFloat(num2)
            );
            break;

          default:
          // code block
        }
      }

      function add(num1, num2) {
        return (num1 + num2).toFixed(4);
      }

      function subtract(num1, num2) {
        return (num1 - num2).toFixed(4);
      }

      function multiply(num1, num2) {
        return (num1 * num2).toFixed(4);
      }

      function divide(num1, num2) {
        return (num1 / num2).toFixed(4);
      }
```

</details>

Happy coding! 🚀
