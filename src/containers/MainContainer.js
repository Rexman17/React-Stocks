import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

let allStocks = `http://localhost:3000/stocks`

class MainContainer extends Component {

// set initial state
  state = {
    stocks: [],
    portfolio: []
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

// 2 diff functions
  // buy = () => {
  //
  // }
  //
  // remove = () => {
  //
  // }

  render() {
    return (
      <div>
        <SearchBar/>

          <div className="row">
            <div className="col-8">

              <StockContainer
                addOrRemove={this.buy}
                stocks={this.state.stocks}/>

            </div>
            <div className="col-4">

              <PortfolioContainer
                addOrRemove={this.remove}
                portStocks={this.state.portfolio} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
