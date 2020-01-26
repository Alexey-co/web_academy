import "./lesson_15.scss";
import { Playground } from "./playground";

const game = new Playground();

game.render();
game.startGame(6);

// function User() {
//     this.name = 'ilya';
//   }
//   User.prototype.greet = function() {
//     console.log(this.name);
//   };
//   const test = new User();
//   test.greet();

// function greeting() {
//   console.log("hello" + this.name);
// }

// const user = {
//   name: "Ilya",
//   greet: greeting
// };

// const user2 = {
//   name: "John",
//   greet: greeting
// };
// user.greet();
// user2.greet();

// function User(name) {
//   this.name = name;
//   this.hello = "world";
// }

// User.prototype.greet = function() {
//   console.log(this.name);
// };

// const user1 = new User("Ilya");
// const user2 = new User("John");
// console.log(user1);
// console.log(user2);

// function User(name, surname) {
//   (this.firstName = name), (this.secondName = surname);
// }

// User.prototype.getFullName = function() {
//   console.log(this.firstName + this.secondName);
// };

// const user1 = new User("Ilya", "John");
// user1.getFullName();

// document.onclick = () => {
//   ferrari.move();
//   oldDadCar.move();
// };
