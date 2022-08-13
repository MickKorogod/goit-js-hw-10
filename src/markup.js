export function renderMarkupCountryInfo ( {
    name,
    capital,
    population,
    langueges,
    flags,

}) {
    return `
    <div class = "country-card">
<h2 class="country-name">${name.common}</h2>
<img src = ${flags.svg} class="country-flag" width = "240" height = "160">
<ul class = "country-list">
<li class = "country-item">
<h3>Capital:&nbsp</h3>
<p>${capital}</p>
</li>
<li class = "country-item">
<h3>Population:&nbsp</h3>
<p>${population}</p>
</li>
<li class = "country-item">
<h3>Langueges:&nbsp</h3>
<p>${Object.values(langueges)}</p>
</li>`;
}

export function renderMarkupCountryList({ name, flags }) {
    return `
    <li class="country-item">
    <img src = "${flags.svg}" alt ="country-flag" width = "20" height = "20">
    <p><b>${name.common}</b></p>
    </li>`
}