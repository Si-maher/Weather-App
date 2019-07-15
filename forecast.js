const key = 'f6qjckL2aLUMct6sAfgAz1wQI89CMCRD'

const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${key}&q=${city}`

    const response = await fetch(base + query)
    const data = await response.json()
    // Returns data at index 0 of the array
    return data[0];

}
getCity('helsinki')
    .then(data => console.log(data))
    .catch(error => console.log(error))

