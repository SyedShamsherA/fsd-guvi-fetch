function createCard(countryData){
     const cardContainer = document.getElementById('cardContainer');

    const card = document.createElement('div')
    card.classList.add('col-lg-4', 'col-sm-12')

    const cardElement = document.createElement('div')
    cardElement.classList.add('card');

    const cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header')
     cardHeader.textContent = countryData.name.common

    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')

     const capital = document.createElement('p')
    capital.textContent = `Capital: ${countryData.capital}`;

    const region = document.createElement('p')
     region.textContent = `Region: ${countryData.region}`

    const latlng = document.createElement('p')
    latlng.textContent = `LatLng: ${countryData.latlng}`

    const countryCode = document.createElement('p')
    countryCode.textContent = `Country Code: ${countryData.alpha3code}`

    console.log(countryData)

    const flag = document.createElement('img')
    flag.src = countryData.flags.png;
    flag.classList.add('flag-img')

    const weatherBtn = document.createElement('button');
    weatherBtn.classList.add('btn', 'btn-primary')
    weatherBtn.textContent = 'Get Weather'

    weatherBtn.addEventListener('click', () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=136e5b428d567445ba679beadeb013f7`)
        .then(response => response.json())
        .then(weatherData => {
            alert(`Current weather in ${countryData.capital}: ${weatherData.weather[0].description}, Temperature: ${weatherData.main.temp} °C`)
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('Failed to load data')
        })
    })

    cardBody.appendChild(capital);
    cardBody.appendChild(region);
    cardBody.appendChild(latlng);
    cardBody.appendChild(countryCode);
    cardBody.appendChild(flag);
    cardBody.appendChild(weatherBtn);
    cardElement.appendChild(cardHeader)
    cardElement.appendChild(cardBody);
    card.appendChild(cardElement)
    cardContainer.appendChild(card)
 }

fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(countriesData => {
     countriesData.forEach(country => {
        console.log(country)
         createCard(country)
    })
   console.log(countriesData)
})
.catch(error => {
    console.error('error fetching country data:', error)
    alert('failed to load datas of country at the moment.')
})

//https://api.openweathermap.org/data/2.5/weather?q=${countryData.capital}&appid=YOUR_API_KEY&units=metric