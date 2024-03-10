// Function to calculate GCD of two numbers
function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}

// Function to calculate GCD of three numbers
function gcdOfThreeNumbers(x, y, z) {
    return gcd(gcd(x, y), z);
}

// Function to take input from the user
function takeUserInput() {
    const num1 = parseInt(prompt("Enter the first number: "));
    const num2 = parseInt(prompt("Enter the second number: "));
    const num3 = parseInt(prompt("Enter the third number: "));

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        console.log("Please enter valid numbers.");
        return;
    }

    const result = gcdOfThreeNumbers(num1, num2, num3);
    console.log("The greatest common divisor (GCD) of", num1 + ",", num2 + ", and", num3 + " is:", result);
}

// Call the function to take user input
takeUserInput();