/*function displayMessage(message, callback) {
  console.log(message);
  callback();
}
function msgcl() {
  console.log("task complete!");
}
displayMessage("this is an msg!", msgcl);



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
calculate(2, 4, add);**/

//3 ⃣ Build a sequence using setTimeout where three callbacks run one 
// after another to print "Start", "Processing", and "Done" with delays between each. 


function delay(callback) {
  callback();
}
function calls(s, p, d) {
  setTimeout(() => { console.log("start") }, 2000);
  setTimeout(() => { console.log("processing") }, 3000);
  setTimeout(() => { console.log("Delay") }, 4000);
}
delay(calls);