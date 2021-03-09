const axios = require("axios");
const city = "Lagos";
//const URL = `api.openweathermap.org/data/2.5/weather?q=lagos&appid=e96146d3a186a7f0d764b4cd78d4e335`;
const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e96146d3a186a7f0d764b4cd78d4e335`;
axios
  .get(URL)
  .then((res) =>
    console.log(
      `it is currently ${res.data.main.temp} degrees out. there is a ${res.data.main.pressure}% chance of rain`
    )
  )
  .catch((err) => console.log(err));
