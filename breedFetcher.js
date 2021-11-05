const request = require("request");



// const fetchBreedDescription = (catBreed, callback) => {
const fetchBreedDescription = function(catBreed, callback) {
  
  console.log("hi");
  // let url = 'https://api.thecatapi.com/v1/breeds/searrch?q=' + catBreed;
  // request(url, function(error, response, body) {
  //   // if(error) {
  //   //   console.error('error:', error);
  //   // };
  //   // if(error) {
  //   //   console.log('statusCode:', response && response.statusCode);
  //   // } // Print the response status code if a response was received
  //   const data = JSON.parse(body);
    
  //   console.log(data);
  
  //   callback(null, data[0].description);

  // });

  // callback(null, "hello");

};



module.exports = { fetchBreedDescription };