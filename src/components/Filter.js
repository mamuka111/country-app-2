import React, { useState } from 'react';
import search from '../images/search.png';

export default function Filter(props) {
  const [array, setArray] = useState([]);

  const { isDarkMode, handleToggle } = props;  

  props.arai.forEach((element) => {
    if (!array.includes(element.region)) {
      setArray([...array, element.region]);
    }
  });

  function searchChange(el) {
    props.search(el);
  }

  function onChange(event) {
    props.onChange(event);
  }

  return (
    <>
      <div className={`section ${isDarkMode ? 'dark-mode-section' : 'light-mode-section'}`}>
        <div className={`searchDiv ${isDarkMode ? 'dark-mode-search' : 'light-mode-search'}`}>
          <img className='searchImg' src={search} alt='search icon' />
          <input
            onInput={searchChange}
            className={`search ${isDarkMode ? 'dark-mode-search' : 'light-mode-search'}`}
            placeholder='Search for a country...'
            value={props.searched}
          />
        </div>
        <select className={`select ${isDarkMode ? 'dark-mode-search' : 'light-mode-search'}`} onChange={onChange}>
          <option  value='Filter by Region'>Filter by Region</option>
          {array.map((region) => {
            return <option key={region}>{region}</option>;
          })}
        </select>
      </div>
    </>
  );
}