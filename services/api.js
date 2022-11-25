const axios = require('axios').default
const qs = require('querystring')
const { formatter } = require('./formatter')

module.exports = class DrinkService {
  constructor() {
    this.instance = axios.create({
      baseURL: `https://www.thecocktaildb.com/api/json/v1/1`,
      headers: { 'accept-encoding': '' },
      responseType: 'json'
    })
  }

  async getHomepage() {
    const responses = await Promise.all([
      this.instance.get('/random.php'),
      this.instance.get('/random.php'),
      this.instance.get('/random.php'),
      this.instance.get('/random.php'),
      this.instance.get('/random.php'),
      this.instance.get('/random.php'),
      this.instance.get('/random.php'),
      this.instance.get('/random.php'),
      this.instance.get('/random.php'),
      this.instance.get('/random.php'),
    ])

    return responses.map(_ => formatter(_.data.drinks[0]))
  }

  async getById(id) {
    const response = await this.instance.get(`/lookup.php`, { params: { i: id } })
    return formatter(response.data.drinks[0])
  }

  async search(search) {
    const response = await this.instance.get(`/search.php`, { params: { s: search } })
    return response.data.drinks.map(drink => formatter(drink))
  }
}