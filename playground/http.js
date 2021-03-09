const https = require("https");

const city = "oyo";
const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e96146d3a186a7f0d764b4cd78d4e335`;

const options = {
  hostname: "encrypted.google.com",
  port: 443,
  path: "/",
  method: "GET",
};

const req = https.request(URL, (res) => {
  console.log("statusCode:", res.statusCode);
  console.log("headers:", res.headers);

  res.on("data", (d) => {
    process.stdout.write(d);
  });
});

req.on("error", (e) => {
  console.error(e);
});
req.end();
