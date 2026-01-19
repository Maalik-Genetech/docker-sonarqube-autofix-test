// ❌ Hardcoded secret (security issue)
const API_KEY = "123456789-SECRET-KEY";

// ❌ Unsafe eval usage
function runUserCode(code) {
    return eval(code);
}

// ❌ Unused variable
const unusedVariable = "I am never used";

// ❌ XSS vulnerability
function renderUserInput(input) {
    document.getElementById("output").innerHTML = input;
}

// ❌ Weak crypto
function hashPassword(password) {
    return btoa(password); // base64 is NOT hashing
}

// Example usage
console.log(runUserCode("2 + 2"));
