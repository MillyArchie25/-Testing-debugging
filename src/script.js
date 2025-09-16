/* =============================
   Part 2: Functions & Scope
   ============================= */

// Global variable
let globalValue = 10;

// Function with parameters & return
function multiplyByFactor(num, factor) {
  let result = num * factor; // local variable
  return result;
}

// Demonstrate scope difference
function showScopeDemo() {
  let localValue = 5;
  return `Global: ${globalValue}, Local: ${localValue}`;
}

// Example of reusable calculation
function calculateSquare(num) {
  return num * num;
}

// Triggered by button in HTML
function showCalculation() {
  const result = calculateSquare(4);
  document.getElementById("scope-demo").innerText =
    showScopeDemo() + ` | Square of 4 = ${result}`;
}

/* =============================
   Part 3: Combine CSS + JS
   ============================= */

const animatedBox = document.getElementById("animated-box");
document.getElementById("animate-btn").addEventListener("click", () => {
  animatedBox.classList.toggle("active");
});

// Modal logic
const modal = document.getElementById("modal");
document.getElementById("toggle-modal").addEventListener("click", () => {
  modal.classList.add("show");
});

document.getElementById("close-modal").addEventListener("click", () => {
  modal.classList.remove("show");
});
