import request from 'superagent'

const catUrl = '/api/catFact'

///Random Cat facts URL //noooo its blocked by CORS
export function getCatFact() {
  return request.get(catUrl).then((response) => response.body)
}

const finnhubPriceURL = 'https://finnhub.io/api/v1/quote?symbol=' //AAPL
const finnhubProfileURL = 'https://finnhub.io/api/v1/stock/profile2?symbol=' //AAPL

export function getFinancePrice(company) {
  return request
    .get(finnhubPriceURL + company + '&token=' + process.env.FINNHUB)
    .then((response) => {
      console.log(response.body)
      return response.body
    })
}

export function getFinanceProfile(company) {
  return request
    .get(finnhubProfileURL + company + '&token=' + process.env.FINNHUB)
    .then((response) => {
      console.log(response.body)
      return response.body
    })
}
