import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    // console.log(this.props);
    const mappedPort = this.props.portStocks.map((pStock, index) => {
      return <Stock
              key={index}
              stock={pStock}
              addOrRemove={this.props.addOrRemove}
              />
    })

    return (
      <div>
        <h2>My Portfolio</h2>
          {mappedPort}
      </div>
    );
  }

}

export default PortfolioContainer;
