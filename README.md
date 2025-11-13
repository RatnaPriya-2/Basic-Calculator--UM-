🧮 Calculator App

This is a simple, fully functional Calculator Web App built using HTML, CSS, and JavaScript.
It performs all basic arithmetic operations and includes additional features such as exponent (^) support, keyboard input, and proper error handling.

📖 How to Use

Launch the Calculator
Open the HTML file in any modern browser (Chrome, Edge, Firefox, etc.).

Enter Numbers and Operations

Click the buttons using your mouse or use your keyboard to type numbers and operators (+, -, *, /, ^).

The current input appears in the display box.

Perform Operations

Click = or press Enter to calculate the result.

Use C to clear all input.

Use DEL or press Backspace to delete the last character.

Keyboard Shortcuts

Key	Function
0–9	Enter numbers
+ - * / ^	Operators
Enter	Calculate result (=)
Backspace	Delete last entry
Escape	Clear all (C)
⚙️ Features

✅ Basic Arithmetic — Supports addition, subtraction, multiplication, and division.
✅ Power Function — Use ^ for exponentiation (e.g., 2^3 = 8).
✅ Prevents Invalid Input

No starting with an operator (except decimal)

No multiple operators in a row

Only one decimal (.) per number
✅ Error Handling

Displays "Error" for invalid expressions (like 5+*2 or 7/0).
✅ Keyboard Input Support — Works seamlessly with your keyboard.
✅ Smart Delete and Clear — DEL removes the last character or clears result after calculation.
✅ Formatted Output — Rounds decimals to two places when necessary.
✅ Read-only Display — Prevents typing directly into the input box.

🧠 Example Calculations
Expression	Result	Note
5+3	8	Basic addition
10/2	5	Division
2^4	16	Power function
5.2+3.1	8.3	Decimal handling
7/0	Error	Division by zero handled
💡 Additional Notes

If you enter . as the first character, it automatically converts it to 0.

Expressions ending with an operator (like 5+) will show "Error".

Infinity and invalid results are replaced with "Error".

🧾 Technologies Used

HTML5 — Structure

CSS3 — Styling and layout

JavaScript (ES6) — Calculator logic, event handling, and input validation

👩‍💻 Developer Notes

This project was built to demonstrate:

DOM manipulation

Event listeners for both mouse and keyboard

Safe expression evaluation

Clean and readable JavaScript logic
