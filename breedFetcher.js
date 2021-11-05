const request = require("request");



// const fetchBreedDescription = (catBreed, callback) => {
const fetchBreedDescription = function(catBreed, callback) {
  
  //console.log("hi");
  let url = 'https://api.thecatapi.com/v1/breeds/search?q=' + catBreed;
  request(url, function(error, response, body) {
    if(error) {
      callback(null, data[0].description);
    }; 

    const data = JSON.parse(body);
    
    //console.log(data);
  
    callback(null, data[0].description);

  });

};



module.exports = {fetchBreedDescription};