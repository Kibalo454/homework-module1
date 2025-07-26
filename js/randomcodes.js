// ------ RANDOM CODES ------

// Global variables
var code = '';
var getCode = '';
var btnvalue;
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';

// Generate and display random code
function generateCode() {
  code = '';
  for (let i = 0; i < 8; i++) {
    const char = Math.floor(Math.random() * str.length);
    code += str.charAt(char);
  }
  document.getElementById("codes").innerText = code;
}

// Enable or disable the submit button
function disableButton(btnvalue) {
  const btn = document.getElementById("submit");
  btn.disabled = btnvalue;

  if (btnvalue === true) {
    btn.style.backgroundColor = "rgba(73, 119, 209, 0.3)";
    btn.style.color = "rgba(255, 255, 255, 0.5)";
    btn.style.cursor = "not-allowed";
  } else {
    btn.style.backgroundColor = "rgba(73, 119, 209, 1)";
    btn.style.color = "rgba(255, 255, 255, 1)";
    btn.style.cursor = "pointer";
  }
}

// Compare input with generated code
function evaluateCode() {
  getCode = document.getElementById("codeentered").value;
  var charset1 = getCode.trim();
  var charset2 = code.trim();

  if (charset1.length === charset2.length && charset1 === charset2) {
    disableButton(false); // Enable button
  } else {
    disableButton(true); // Keep disabled
  }
}

// Initialize on page load
window.onload = function () {
  generateCode();
  disableButton(true);
  var codebox = document.getElementById("codeentered");
  codebox.addEventListener("input", evaluateCode);
};
