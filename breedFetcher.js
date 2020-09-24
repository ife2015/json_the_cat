const request = require('request');
const breedName = process.argv.slice(2);


request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName[0].slice(0,4).toLowerCase()}`, (error, response, body) => {
  
  if (error) {
    console.log(error);
  }
 
  const data = JSON.parse(body);

  if (data.length === 0) {
    console.log('breed not found');
  } else {
    const description = data[0].description;
    console.log(description);
  }

});