const log = (...parms)=>console.log(...parms)
let xhr = new XMLHttpRequest();
console.log(xhr); //object
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function () {
  const data = JSON.parse(xhr.response);
  log(data);

  log('----------Task1-----------')
//   All the countries from asia continent /region using Filter function

  const asianCountries = data.filter(country => country.region && country.region === 'Asia');
    log('Asian Countries:', asianCountries);
    
log('------------Task2--------------')
// Get all the countries with a population of less than 2 lakhs using Filter function

    const CountriesPopulation = data.filter(country =>country.population && country.population < 200000);
    log("CountryPopulation:", CountriesPopulation);

log('--------------Task3-------------')
// Print the following details name, capital, flag, using forEach function

    log('\nDetails - Name, Capital, Flag:');
    data.forEach(country => {
        console.log(`Name: ${country.name.common},
        Capital: ${country.capital},
        Flag: ${country.flags.svg}`);
    });

    log('-------------------Task4------------------')
    // Print the total population of countries using reduce function

    const totalPopulation = data.reduce((acc, country) => acc + (country.population || 0), 0);
    log('\nTotal Population of Countries:', totalPopulation);

log('------------------------Task5---------------------')
// Print the country that uses US dollars as currency.

    const usDollarCountry = data.find(country => country.currencies && country.currencies.USD);
    log('\nCountry Using US Dollars:', usDollarCountry);
    };
