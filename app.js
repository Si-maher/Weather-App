const cityForm = document.querySelector('form')
const card = document.querySelector('.card')
const details = document.querySelector('.details')
const time = document.querySelector('img.time')
const icon = document.querySelector('.icon img')

const updateUI = (data) => {
    const cityDetails = data.cityDetails
    const weather = data.weather
    // Update template details

    details.innerHTML = `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
                <div class="my-3">${weather.WeatherText}</div>
                <div class="display-4 my-4">
                    <span>${weather.Temperature.Metric.Value}</span>
                    <span>&deg;C</span>
                </div>`
    // Update night and day image
    // Template string is used because we are using variables and to make it dynamic

    const iconSource = `./img/icons/${weather.WeatherIcon}.svg`
    icon.setAttribute('src', iconSource)

    let timeSource = null
    if (weather.IsDayTime) {
        timeSource = './img/day.svg'
    } else {
        timeSource = './img/night.svg'
    }
    time.setAttribute('src', timeSource)

    // Remove the d-none class if present

    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none')
    }

}
const updateCity = async (city) => {

    // Calling these functions from forecast.js.
    const cityDetails = await getCity(city)
    const weather = await getWeather(cityDetails.Key)

    return {
        // If the property and value names are the same, you can delete one of them (object shorthand notation)
        cityDetails: cityDetails,
        weather: weather
    }



}
cityForm.addEventListener('submit', element => {
    // prevent default action
    element.preventDefault()

    // Get city value
    const city = cityForm.city.value.trim()
    cityForm.reset()

    // Update the UI with the new city
    updateCity(city)
        .then(data => updateUI(data))
        .catch(error => console.log(error))
})