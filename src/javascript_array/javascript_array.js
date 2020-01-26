import "./javascript_array.scss";
// ArrayMap
const products = [
  {
    title: "phone",
    price: 100
  },
  {
    title: "laptop",
    price: 2500
  },
  {
    title: "TV",
    price: 500
  },
  {
    title: "Desktop",
    price: 1500
  }
];

// const elements = [];

// for (let i = 0; i < products.length; i++) {
//   const str = `<li>${products[i].title}:${products[i].price}</li>`;
//   elements.push(str);
// }
// console.log(elements);

// const elements = products.map((product, i, arr) => {
//   console.log(product, i, arr);
//   return `<li>${product.title}:${product.price}</li>`;
// });

Array.prototype.myMap = function(fn) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(fn(this[i], i, this));
  }

  return newArr;
};

const myElements = products.myMap(product => {
  return product.price;
});

console.log(myElements);
