import stockReducer from "./reducer"

describe('Tests for reducers', () => {
  const state = []
  const companies = [
    {
        "symbol": "ATVI",
        "name": "Activision Blizzard",
        "sector": "Communication Services",
        "subSector": "Communication Services",
        "headQuarter": "Santa Monica, CALIFORNIA",
        "dateFirstAdded": null,
        "cik": "0000718877",
        "founded": "1983-06-10"
    },
    {
        "symbol": "ADBE",
        "name": "Adobe",
        "sector": "Technology",
        "subSector": "Technology",
        "headQuarter": "San Jose, CALIFORNIA",
        "dateFirstAdded": null,
        "cik": "0000796343",
        "founded": "1986-01-08"
    },
    {
        "symbol": "ADP",
        "name": "ADP",
        "sector": "Industrials",
        "subSector": "Industrials",
        "headQuarter": "Roseland, NEW JERSEY",
        "dateFirstAdded": null,
        "cik": "0000008670",
        "founded": "1961-09-01"
    },
  ]
  const details = {
    "symbol": "ADBE",
    "name": "Adobe Inc.",
    "price": 513.54,
    "changesPercentage": 0.5305075,
    "change": 2.7099915,
    "dayLow": 503.77,
    "dayHigh": 519.97,
    "yearHigh": 699.54,
    "yearLow": 420.78,
    "marketCap": 242236801024,
    "priceAvg50": 572.0876,
    "priceAvg200": 588.24,
    "volume": 2536737,
    "avgVolume": 3403438,
    "exchange": "NASDAQ",
    "open": 503.77,
    "previousClose": 510.83,
    "eps": 10.02,
    "pe": 51.25149,
    "earningsAnnouncement": "2022-03-22T20:00:00.000+0000",
    "sharesOutstanding": 471699967,
    "timestamp": 1644020771
}
  const updatedCompany = {...companies[1],details}

  test('Add companies to store', () => {
    expect(stockReducer(state, {type: 'app/reducer/LOAD_COMPANIES', payload:companies})).toEqual(companies)
  })
  test('Add details to a company', () => {
    expect(stockReducer(companies, {type: 'app/reducer/LOAD_DETAILS', payload: details})).toEqual([companies[0],updatedCompany,companies[2]])
  })


})


