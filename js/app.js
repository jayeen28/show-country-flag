const loadCountryInfo = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => placeData(data));
}
loadCountryInfo();
const placeData = (countries) => {
    const countryContainer = document.getElementById('country-container');
    countries.forEach((country, i) => {
        //console.log(country.numericCode);
        const newDiv = document.createElement('div');
        newDiv.classList.add('row');
        newDiv.classList.add('box');
        const countryName = country.name;
        newDiv.innerHTML = `
        <div class="col" id="button-place">
        <h6>
            Name: ${countryName}.
        </h6>
        <h6>
        Capital: ${country.capital}.
        </h6>
        <button class="btn-danger rounded" id="flag-btn" onclick="loadFlag('${'flag' + i}','${countryName}')">Show Flag</button>
        </div>
        <div class="col">
        <h6>Flag</h6>
        <p><img class="img-fluid" id=${'flag' + i}></p>
        </div>
        `
        countryContainer.appendChild(newDiv);
    })
}

const loadFlag = (id, name) => {
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        .then(res => res.json())
        .then(data => showFlag(data, id));
}
const showFlag = (data, id) => {
    document.getElementById(id).src = data[0].flag;
}
