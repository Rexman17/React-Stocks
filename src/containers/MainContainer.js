import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

let allStocks = `http://localhost:3000/stocks`

class MainContainer extends Component {

// set initial state
  state = {
    stocks: [],
    portfolio: [],
    filterTerm: ''
  }

// get all the stocks when the page first mounts
componentDidMount() {
  fetch(allStocks)
  .then(response => response.json())
  .then(stocks => {
    // console.log(allStocks);
    this.setState({
      stocks
    }/*, () => console.log(this.state)*/)
  })
}

  // moving to portfolio and out of StockContainer
  buyStock = (stock) => {
    // console.log(stock);
    let bought = this.state.stocks.filter((s) => {
      return s.id !== stock.id
    })

    this.setState({
      stocks: bought,
      portfolio: [...this.state.portfolio, stock]
    })

  }

  // moving back to StockContainer and out of portfolio
  sellStock = (stock) => {
    // console.log('selling stock');
    let sold = this.state.portfolio.filter((s) => {
      return s.id !== stock.id
    })

    this.setState({
      stocks: [...this.state.stocks, stock],
      portfolio: sold
    })
  }

  sortBy = (e) => {
    if (e.target.value === "Alphabetically") {
      let alphabetically = this.state.stocks.sort((stockA, stockB) => {
        return stockA.ticker.toLowerCase().localeCompare(stockB.ticker.toLowerCase())
      })

      this.setState({
        stocks: alphabetically
      })
    }

    if (e.target.value === "Price") {
      let ascendingPrice = this.state.stocks.sort((stockA, stockB) => {
        return stockA.price - stockB.price
      })

      this.setState({
        stocks: ascendingPrice
      })
    }

  }

  filterBy = (filterTerm) => {
    // console.log('filtering');
    this.setState({
      filterTerm: filterTerm
    }, () => console.log(this.state))
  }


  render() {

    const filtered = this.state.stocks.filter((stock) => {
      return stock.type === this.state.filterTerm
    })

    return (
      <div>
        <SearchBar sortBy={this.sortBy} filterBy={this.filterBy} />

          <div className="row">
            <div className="col-8">

              <StockContainer
                addOrRemove={this.buyStock}
                stocks={this.state.filterTerm !== '' ? filtered : this.state.stocks}/>

            </div>
            <div className="col-4">

              <PortfolioContainer
                addOrRemove={this.sellStock}
                portStocks={this.state.portfolio} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
