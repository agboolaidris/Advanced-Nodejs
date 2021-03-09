const obj = {
  name: "Ibrahim",
  age: 12,
  city: "Ikorodu",
};
const { name, age, height = 17 } = obj;

console.log(height);
console.log(name);
console.log(age);
