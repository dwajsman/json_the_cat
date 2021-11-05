const {
  fetchBreedDescription
} = require('./breedFetcher');

let catBreed = process.argv[2];

fetchBreedDescription(catBreed, (error, description) => {

  if (description.length === 0) {
    console.log("Something went wrong", error);
  }
  if (description.length > 0) {
    console.log("\n", description, "\n");
  }

});
