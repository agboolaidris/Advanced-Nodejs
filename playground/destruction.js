const obj = {
  name: "Ibrahim",
  age: 12,
  city: "Ikorodu",
  height: 90,
};
const { name, age: min, height = 17 } = obj;

console.log(height);
console.log(name);
console.log(min);
