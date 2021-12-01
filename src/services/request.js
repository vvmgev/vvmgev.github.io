class Request {
    URL = 'https://api.openweathermap.org/data/2.5/forecast/daily';
    urlParams = new URLSearchParams({units: 'metric', appid: '58b6f7c78582bffab3936dac99c31b25'})

    request(query) {
        return fetch(`${this.URL}?q=${query}&${this.urlParams.toString()}`)
    }

    async getWeather(city)  {
        return await (await this.request(city)).json();
    }
    
}

export default new Request();