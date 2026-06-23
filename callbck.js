/*function displayMessage(message, callback) {
  console.log(message);
  callback();
}
function msgcl() {
  console.log("task complete!");
}
displayMessage("this is an msg!", msgcl);

**/

//2 ⃣ Create a function calculate(a, b, callback) that performs addition, subtraction, or multiplication
//depending on which callback is passed. 

function calculate(a, b, callback) {
  return callback(a, b);
}
function add(a, b) {
  console.log(a + b);
}

function sub(a, b) {
  console.log(a - b);
}


calculate(2, 4, add);