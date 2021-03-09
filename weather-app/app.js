const weather = require("./utils/weather");

weather("oyo", (error, res) => {
  if (error) {
    console.log(error);
  } else {
    console.log(res);
  }
});
