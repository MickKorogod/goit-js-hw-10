import './css/styles.css';
import { Notify } from 'notiflix';
import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries'
import { 
    renderMarkupCountryList,
    renderMarkupCountryInfo,
} from './markup'
const input = document.querySelector('input')
const countryList = document.querySelector('.country-list')
const countryInfo = document.querySelector ('.country-info')

const DEBOUNCE_DELAY = 300;
const limit = 10;

refs.searchForm.addEventListner('input', debounce(onCountrySearch, DEBOUNCE_DELAY));
function onCountrySearch(e) {
    e.preventDefault()
    const countryName = input.value
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
    else if ( countries.length === 1 ) {
        countryInfo.innerHTML = renderMarkupCountryInfo(countries[0])
    }
    else {
        let countryListMarkup = '';
        countries.map(country => {
            countryListMarkup += renderMarkupCountryList(country);
        });
        countryList.insertAjecenHTML('beforeend', countryListMarkup);
    }
}