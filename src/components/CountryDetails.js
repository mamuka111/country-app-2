import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import arrowBack from  "../images/arrowBack.jpg";
export default function CountryDetails(props) {
    const {countryId} = useParams();
    const navigate = useNavigate();
     const {data} = props;
     const { isDarkMode } = props;

     const element = data.find((element)=>{
      return element.cca3 === countryId && element
  })



  return (
   <>
   <div className={`nextCard ${isDarkMode ? 'dark-mode-nextCard' : 'light-mode-nextCard'}`}>
   <div className='nextCardLeft'>
    <div onClick={() => {navigate("/")}} className='backDiv'>
      <img className='arrow' src={arrowBack}></img>
      <div className='back'>back</div>
    </div>
    
   <img className='bigImg' src={element.flags.png} alt={element.name.common} />
   </div>
  <div className='nextCardRigth'>
    <div className='empty'></div>
   <div className='textContainer'> 
   <div className='mainInformation'>
   <h1 className={`topH ${isDarkMode ? 'dark-mode-h1' : 'light-mode-h1'}`}>{element.name.common}</h1>
   <h1 className={`h ${isDarkMode ? 'dark-mode-h1' : 'light-mode-h1'}`}>Native name: <h2  className={`h2 ${isDarkMode ? 'dark-mode-h1' : 'light-mode-h1'}`}>{element.name.common}</h2></h1>
   <h1  className={`h ${isDarkMode ? 'dark-mode-h1' : 'light-mode-h1'}`}>Population: <h2  className={`h2 ${isDarkMode ? 'dark-mode-h1' : 'light-mode-h1'}`}>{element.population.toLocaleString()}</h2></h1>
   <h1  className={`h ${isDarkMode ? 'dark-mode-h1' : 'light-mode-h1'}`}>Region: <h2  className={`h2 ${isDarkMode ? 'dark-mode-h1' : 'light-mode-h1'}`}>{element.region}</h2></h1>
   <h1  className={`h ${isDarkMode ? 'dark-mode-h1' : 'light-mode-h1'}`}>Subregion: <h2  className={`h2 ${isDarkMode ? 'dark-mode-h1' : 'light-mode-h1'}`}>{element.subregion}</h2></h1>
   <h1  className={`h ${isDarkMode ? 'dark-mode-h1' : 'light-mode-h1'}`}>Capital: <h2  className={`h2 ${isDarkMode ? 'dark-mode-h1' : 'light-mode-h1'}`}>{element.capital}</h2></h1>
   </div>
   <div className='secondInformation'>
    <h1 className={`h ${isDarkMode ? 'dark-mode-h1' : 'light-mode-h1'}`}>Top Level Domain: <h2  className={`h2 ${isDarkMode ? 'dark-mode-h1' : 'light-mode-h1'}`}>{element.tld}</h2></h1>
    <h1  className={`h ${isDarkMode ? 'dark-mode-h1' : 'light-mode-h1'}`}>Currencies: <h2  className={`h2 ${isDarkMode ? 'dark-mode-h1' : 'light-mode-h1'}`}>{Object.values(element.currencies)[0].name}</h2></h1>
    <h1  className={`h ${isDarkMode ? 'dark-mode-h1' : 'light-mode-h1'}`}>Language: <h2  className={`h2 ${isDarkMode ? 'dark-mode-h1' : 'light-mode-h1'}`}>{Object.values(element.languages)[0]}</h2></h1>
   </div>
   </div>
   <div className='borderCountries'>

   </div>
  </div>
   </div>
   </>
    )
}