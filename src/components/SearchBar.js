import React from 'react';

const SearchBar = (props) => {

  const select = (e) => {
    // console.log('selecting', e.target);
    props.sortBy(e)
  }

  const filter = (e) => {
    // console.log(e.target.value);
    props.filterBy(e.target.value)
  }

  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={null} onChange={select}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={null} onChange={select}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={filter}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
