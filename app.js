const cityForm = document.querySelector('form')
const updateCity = async (city) => {

    // Calling these functions from forecast.js.
    const cityDetails = await getCity(city)
    const weather = await getWeather(cityDetails.Key)

    return {
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
        .then(data => console.log(data))
        .catch(error => console.log(error))
})