function number() {
  return new Promise((resolve, reject) => {
    let num = prompt("enter numb=>");
    (num > 0 ? resolve("poss") : reject("neg"));
  });
}
number()
  .then((res) => { console.log(res) })
  .catch((err) => { console.log(err) });

