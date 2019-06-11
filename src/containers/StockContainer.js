import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  // handleClick = (e) => {
  //   console.log(e);
  // }

  render() {

    const mappedStocks = this.props.stocks.map((stock, index) => {
      return <Stock
              key={index}
              stock={stock}
              addOrRemove={this.props.addOrRemove}
              />
    })

    return (
      <div>
        <h2>Stocks</h2>
        {mappedStocks}
      </div>
    );
  }

}

export default StockContainer;
