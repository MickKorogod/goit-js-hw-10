
export function renderMarkupCountryInfo({
    name,
    capital,
    population,
    languages,
    flags,  

}) {
    return`<li>
 <img src="${flags.svg}" alt="${name.official}" width = "240" height = "140">
<h2>${name.official ? name.official : ""}</h2>
<p>Population:&nbsp${population ? population : ""}</p>
<p>Capital:&nbsp${capital ? capital : ""}</p>
<p>Langueges:&nbsp ${Object.values(languages)}</p>

</li>`}

export function renderMarkupCountryList({ name, flags, }) {
    return `
   <ul> <li class="country-item">
    <img src = "${flags.svg}" alt ="country-flag" width = "20" height = "20">
    <p class = "counrty-name"><b>${name.common}</b></p>
    </li></ul>`
}

// export function renderMarkupCountryInfo ( {
//     name,
//     capital,
//     population,
//     langueges,
//     flags,

// }) {
//     return `
//     <div class = "country-card">
// <h2 class="country-name">${name.common}</h2>
// <img src = ${flags.svg} class="country-flag" width = "240" height = "160">
// <ul class = "country-list">
// <li class = "country-item">
// <h3>Capital:&nbsp</h3>
// <p>${capital}</p>
// </li>
// <li class = "country-item">
// <h3>Population:&nbsp</h3>
// <p>${population}</p>
// </li>
// <li class = "country-item">
// <h3>Langueges:&nbsp</h3>
// <p>${Object.values(langueges)}</p>
// </li>
// </ul>
// </div>`;
// }