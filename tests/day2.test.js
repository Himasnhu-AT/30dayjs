const fs = require("fs");
const assert = require("assert");
const path = require("path");

const filePath = path.join(__dirname, "day2.js");

// Read the content of day2.js
const fileContent = fs.readFileSync(filePath, "utf-8");

// Regular expressions to check the declarations
const letVarPattern = /\blet\b\s+a\s*=|\bvar\b\s+a\s*=/;
const constPattern = /\bconst\b\s+b\s*=/;

try {
  // Ensure 'a' is declared with let or var
  assert(
    letVarPattern.test(fileContent),
    "Variable 'a' should be declared with 'let' or 'var'",
  );

  // Ensure 'b' is declared with const
  assert(
    constPattern.test(fileContent),
    "Variable 'b' should be declared with 'const'",
  );

  console.log("Day 2 declaration tests passed successfully!");

  // Additional logic tests
  eval(fileContent);

  console.log("Day 2 logic tests passed successfully!");
} catch (error) {
  console.error("Day 2 tests failed!");
  console.error(error.message);
  process.exit(1);
}
