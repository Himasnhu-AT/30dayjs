const fs = require("fs");
const assert = require("assert");
const path = require("path");

const filePath = path.join(__dirname, "day1.js");

// Read the content of day1.js
const fileContent = fs.readFileSync(filePath, "utf-8");

// Regex pattern to check the variable assignment
const greetingPattern = /\blet\s+greeting\s*=\s*"Hello, World!";/;

try {
  // Ensure the greeting variable is assigned "Hello, World!"
  assert(
    greetingPattern.test(fileContent),
    'The greeting variable should be assigned "Hello, World!"',
  );

  console.log("Day 1 variable assignment test passed successfully!");

  // Now let's check the script's output as before
  const output = require("child_process").execSync(`node ${filePath}`, {
    encoding: "utf-8",
  });

  // Check that the first line of the output is "Hello, World!"
  assert.strictEqual(
    output.split("\n")[0],
    "Hello, World!",
    'The first output should be "Hello, World!"',
  );

  // Check that the second line of the output is the value of the greeting variable ("Hello, World!")
  assert.strictEqual(
    output.split("\n")[1],
    "Hello, World!",
    'The second output should be the value of the greeting variable, "Hello, World!"',
  );

  console.log("Day 1 output test passed successfully!");
} catch (error) {
  console.error("Day 1 tests failed!");
  console.error(error.message);
  process.exit(1);
}
