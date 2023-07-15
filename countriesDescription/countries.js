const body = document.querySelector("body"); 
const DarkMode = document.querySelector(".DarkMode");
const headerCountrie = document.querySelector(".headerCountrie"); 
const inputSearch= document.querySelector(".inputSearch"); 
const filterDiv = document.querySelector('.filterDiv');
const back = document.querySelector('.back'); 
const countries = document.querySelector('#countries'); 

const loadCountryApi = () => {
    fetch('tp.json')
        .then(res => res.json())
        .then(data => {
            displayCountries(data);
            setupSearch(data);
        })
        .catch(error => console.log(error));
}



const getCountry = country => {
    return `
        <div class="countryDivs">
            <img src="${country.flags.png}" alt="image country">
            <h2>${country.name}</h2>
            <hr>
            <h4>Population: ${country.population}</h4>
            <h4>Region: ${country.region}</h4>
            <h4>Capital: ${country.capital}</h4>
        </div>
    `;
}

const displayCountries = countries => {
  const countriesHtml = countries.map(country => getCountry(country));
  const container = document.getElementById('countries');
  container.innerHTML = countriesHtml.join('');
  
  const countryDivs = document.querySelectorAll('.countryDivs');
  countryDivs.forEach((countryDiv, index) => {
      countryDiv.addEventListener('click', () => {
          inputSearch.style.display = "none";
          filterDiv.style.display = "none";
          back.style.display = "flex";  
          const country = countries[index];
          displayCountryDetails(country.name);
          container.style.display = 'none';
      });
  });
}
const container = document.getElementById('countries');
back.addEventListener("click", function(){
  inputSearch.style.display = "flex";
          filterDiv.style.display = "flex";
          back.style.display = "none";
          container.style.display = "grid"; 
})


DarkMode.addEventListener("click", function (){
  body.classList.toggle('blackDarkMode'); 
  body.classList.toggle('FontColorDarkMode'); 

})

const displayCountryDetails = countryName => {
    fetch('tp.json')
      .then(res => res.json())
      .then(data => {
        const country = data.find(country => country.name === countryName);
        if (country) {
          const countryDetails = getCountryDetails(country);
          const detailsContainer = document.getElementById('country-details');
          detailsContainer.innerHTML = countryDetails;
        } else {
          console.log('Country not found');
        }
      })
      .catch(error => console.log(error));
  };
  
  const getCountryDetails = country => {
    const languageNames = country.languages.map(language => language.name).join(", ");
    const hasBorders = country.borders && country.borders.length > 0;
    const currencies = country.currencies && country.currencies.length > 0; 
    const currenciesName = currencies ? country.currencies[0].name : "No Currencies"; 
    const borderButtons = hasBorders ? country.borders.map(border => `<button class = "buttonBoders">${border}</button>`).join("") : "No borders";
    return `
      <div class="country-details-div">

        <div class="countryFlagDetails">
          <img src="${country.flags.png}" alt="image country">
        </div>

        <div class = "description">

          <div class="descriptionCountryName">
            <h2>${country.name}</h2>
          </div>
          <div class = "descriptionOthers">
            <div class ="firstDescription">
              <p> <strong>Native Name: </strong>${country.nativeName}</P>
              <p> <strong>Population: </strong>${country.population}</P>
              <p> <strong>Region: </strong>${country.region}</P>
              <p> <strong>Capital: </strong>${country.capital}</P>
            </div>

            <div class="secondDescription">
              <p> <strong>Top level domain: </strong>${country.topLevelDomain}</P>
              <p> <strong>Currencies: </strong>${currenciesName}</P>
              <p> <strong>Languages: </strong>${languageNames}</P>
            </div>
          </div>

          <div class="descriptionBorder">
              <p> <strong>Borders country: </strong> ${borderButtons}</P>
            </div>
          
        </div>

      </div>
    `;
  };

  

const setupSearch = countries => {
    const searchInput = document.querySelector('.search');
    
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.trim().toLowerCase();
        const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(searchTerm));
        displayFilteredCountries(filteredCountries);
    });
}

const displayFilteredCountries = filteredCountries => {
    const container = document.getElementById('countries');
    container.innerHTML = '';

    if (filteredCountries.length > 0) {
        const countriesHtml = filteredCountries.map(country => getCountry(country));
        container.innerHTML = countriesHtml.join('');
        
        const countryDivs = document.querySelectorAll('.countryDivs');
        countryDivs.forEach((countryDiv, index) => {
            countryDiv.addEventListener('click', () => {
                const country = filteredCountries[index];
                displayCountryDetails(country.name);
                container.style.display = 'none';
            });
        });
    } else {
        container.innerHTML = '<h3>No matching countries found</h3>';
    }
}

const filterBar = document.querySelector(".filterBar");
const filterOption = document.querySelector(".filterOption");

filterBar.addEventListener("click", function(){
    filterOption.classList.toggle('show');;
})


const regions = [ 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

// Create filter options
regions.forEach(region => {
  const regionOption = document.createElement('p');
  regionOption.textContent = region;
  regionOption.addEventListener('click', () => {
    filterCountriesByRegion(region);
  });
  filterOption.appendChild(regionOption);
});

const filterCountriesByRegion = region => {
  const container = document.getElementById('countries');
  const countryDivs = container.getElementsByClassName('countryDivs');

  Array.from(countryDivs).forEach(countryDiv => {
    const regionElement = countryDiv.querySelector('h4:nth-of-type(2)');

    if (region === 'All' || regionElement.textContent.includes(region)) {
      countryDiv.style.display = 'block';
      filterOption.style.display = "none";
    } else {
      countryDiv.style.display = 'none';
    }
  });
};



loadCountryApi();

