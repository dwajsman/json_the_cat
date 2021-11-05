const request = require("request");

let catBreed = process.argv[2];

let url = 'https://api.thecatapi.com/v1/breeds/searrch?q=' + catBreed;



request(url, function(error, response, body) {
  if(error !== null) console.error('error:', error); // Print the error if one occurred
  if(error !== null) console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  const data = JSON.parse(body);
  if(data.length === 0) {
    console.log("Something went wrong");
  }
  if(data.length > 0) {
    console.log("\n", data[0].description, "\n");
  }

});