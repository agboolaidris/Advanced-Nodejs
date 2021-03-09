const add = (num1, num2, callback) => {
  setTimeout(() => {
    const sum = num1 + num2;
    callback(sum);
  }, 2000);
};

add(4, 1, (sum) => {
  console.log(sum);
});
