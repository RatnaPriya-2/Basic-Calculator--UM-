Calculator Web App

This is a simple, fully functional Calculator Web App built using HTML, CSS, and JavaScript (ES6). It performs all basic arithmetic operations and includes features like exponentiation, robust keyboard input, and proper error handling.

How to Use

1. Launch the Calculator
* Open the `index.html` file in any modern web browser (e.g., Chrome, Edge, Firefox).

2. Enter Numbers and Operations
* Click the buttons using your mouse, or
* Use your keyboard to type numbers and operators.
* The current input will appear in the display box.

3. Perform Operations
* Click the "=" button or press Enter to calculate the result.
* Click "C" or press Escape to clear all input and reset the calculator.
* Click "DEL" or press Backspace to delete the last character entered.

---
 Keyboard Shortcuts

 Key                Function 
 
 0–9            Enter numbers 
 + - \* / ^     Operators 
 Enter          Calculate result (=) 
 Backspace      Delete last entry (DEL) 
 Escape         Clear all (C) 


✨ Features

* Basic Arithmetic: Supports addition (+), subtraction (-), multiplication (*), and division (/).
* Power Function: Use the ^ symbol for exponentiation (e.g., `2^3 = 8`).
* Keyboard Input: Works seamlessly with standard keyboard keys.
* Smart Delete & Clear: `DEL` removes the last character or clears the result after a calculation is performed.
* Read-only Display: Prevents direct manual typing into the input box for controlled operation.
* Formatted Output: Decimals are rounded to two places when necessary.

Input Validation and Error Handling

* Prevents Invalid Input:
    * Cannot start an expression with an operator (except decimal).
    * Prevents multiple operators in a row.
    * Allows only one decimal (`.`) per number.
* Error Handling: Displays "Error" for invalid expressions (e.g., `5+*2`, expressions ending with an operator like `5+`, or results that yield `Infinity` or `NaN`).
* Decimal Handling: Entering `.` as the first character automatically converts it to "0.".

Example Calculations

* 5 + 3 = 8 (Basic addition)
* 10 / 2 = 5 (Division)
* 2 ^ 4 = 16 (Power function)
* 5.2 + 3.1 = 8.3 (Decimal handling)
* 7 / 0 = Error (Division by zero handled)

Developer Notes

This project demonstrates several core concepts in web development:

* DOM manipulation
* Event listeners for both mouse and keyboard input
* Safe expression evaluation (to prevent security risks)
* Clean and readable JavaScript logic
