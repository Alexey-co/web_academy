// import "./lesson_11.scss";

// function greet() {
//   const name = prompt("Enter ");
//   alert("hello " + name.length);
// }
// header.onclick = greet;

// function add(a, b) {
//   if (!a || !b || isNaN(a) || isNaN(b)) {
//     console.error("INPUT INCORRECT");
//   } else {
//     return a + b;
//   }
// }

// const t = add(3, 6);
// alert(t);
// add(3, 4);
// add(10, 20);
// const a = parseInt(prompt("A"));
// const b = parseInt(prompt("B"));
// add(a, b);
function isEqual(arrayA, arrayB) {
  let isEqual = true;
  for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] !== arrayB[i]) {
      isEqual = false;
      break;
    }
  }
  return isEqual;
}

const y = isEqual([0, 2, 3], [0, 2, 3]);
const o = isEqual([0, 2, 4], [0, 2, 3]);
