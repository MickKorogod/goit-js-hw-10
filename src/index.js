import './css/styles.css';
import { Notify } from 'notiflix';
import debounce from 'lodash.debounce';
import {fetchCountries }from './fetchCountries'
import { 
    renderMarkupCountryList,
    renderMarkupCountryInfo,
} from './markup'
const inputCountry = document.querySelector('input')
const countryList = document.querySelector('.country-list')
const countryInfo = document.querySelector ('.country-info')

const DEBOUNCE_DELAY = 300;
const limit = 10;
inputCountry.addEventListener('input', debounce(onCountrySearch, DEBOUNCE_DELAY));

function onCountrySearch(e) {

    e.preventDefault()

    const countryName = inputCountry.value
    const name = countryName.trim();
    if (name === '') {
        clearMarkup();
        return;     
    }

    fetchCountries(name)
        .then(showCountryCard)
        .catch(error => {
            clearMarkup();
            Notify.failure('Oops, there is no country with that name')
            console.log(error)
        });
}
function clearMarkup() {
    countryList.innerHTML = '';
    countryInfo.innerHTML = '';
}

function showCountryCard(countries) {
    if (countries.length > limit) {
        Notify.info('Too many matches found. Please enter a more specific name.')
        return
    }
    else if (countries.length === 1) {
        countryList.innerHTML = ''
        countryInfo.innerHTML = renderMarkupCountryInfo(countries[0])
    }
    else {
        let countryListMarkup = '';
        countries.map(country => {
            countryListMarkup += renderMarkupCountryList(country);
            countryInfo.innerHTML = ''
        });
        countryList.insertAdjacentHTML('beforeend', countryListMarkup);
    }
}

//     API.fetchCountries(countryName)
//         .then((data) => insertContent(data))
//         .catch(error => {
//         console.log(error)
//     })
// }

// const creatListItem = (item) =>
//    `<li>
//   <img src="${item.flags.svg}" alt="${item.name.official}" width = "240" height = "160">
//   <h2>${item.name.official ? item.name.official: ""}</h2>
//   <p>Population:${item.population ? item.population: ""}</p>
//   <p>Capital:${item.capital ? item.capital: ""}</p>
  
// </li>`

// const generateContent = (array) => array?.reduce((acc, item) => acc + creatListItem(item))
// const insertContent = (array) => {
// const res = generateContent(array);
// countryInfo.insertAdjacentHTML('beforeend',res)
// }
     