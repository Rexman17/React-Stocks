import React from 'react'

const Stock = (props) => {

  // console.log("stock props",props);
  return (
    <div onClick={() => props.addOrRemove(props.stock, props.inStockCont)}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{
              props.stock.name
            }</h5>
          <p className="card-text">{
              props.stock.price
            }</p>
        </div>
      </div>
    </div>
  )

}


export default Stock
