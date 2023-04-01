import React from 'react';

function Card(props) {
  const { data, isDarkMode } = props;
  
  return (
    <div className={`card ${isDarkMode ? 'dark-mode-card' : 'light-mode-card'}`}>
      <img className='imgs' src={data.flags.png} alt={data.name.common} />
      <div className='ragac'>
      <div className='h4tags'>
        <h2 className={`countryNames ${isDarkMode ? 'dark-mode-card' : 'light-mode-card'}`}>{data.name.common}</h2>
          <h4 className={`h4 ${isDarkMode ? 'dark-mode-card' : 'light-mode-card'}`}>population: <h3 className={`h4 ${isDarkMode ? 'dark-mode-card' : 'light-mode-card'}`}>{data.population.toLocaleString()}</h3></h4>
          <h4  className={`h4 ${isDarkMode ? 'dark-mode-card' : 'light-mode-card'}`}>region: {data.continents}</h4>
          <h4 className={`h4 ${isDarkMode ? 'dark-mode-card' : 'light-mode-card'}`}>capital: {data.capital}</h4>
        </div>
      </div>
    </div>
  );
}

export default Card;