function displayMessage(message, callback) {
  console.log(message);
  callback();
}
function msgcl() {
  console.log("task complete!");
}
displayMessage("this is an msg!", msgcl);