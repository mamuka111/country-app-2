import './App.css';
import Header from './components/Header';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, BrowserRouter, Routes } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import { Link } from 'react-router-dom';
import MainPage from './components/MainPage';
import Card from './components/Card';

function App() {
  const [data, setData] = useState([]);
  const [fetched, setFetched] = useState(false);
  const [clickedRegion, setClickedRegion] = useState('Filter by Region');
  const [searched, setSearched] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  function searchChange(el) {
    setSearched(el.target.value);
  }
  function onChange(event) {
    setClickedRegion(event.target.value);
  }

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      setData(response.data);
      setFetched(true);
      console.log(response.data)

    });
  }, []);

  if (data.length === 0) {
    return null;
  }

  const filteredData = data.filter(
    (element) =>
      (clickedRegion === 'Filter by Region' || element.region === clickedRegion) &&
      (searched === '' ||
        element.name.common.toLowerCase().includes(searched.toLowerCase()))
  );

  return (
    <>
      <div className="mainContainer" >
        <Header isDarkMode={isDarkMode} handleToggle={handleToggle} />
        <BrowserRouter>
        <Routes>
          <Route path='/:countryId' element={<CountryDetails isDarkMode={isDarkMode}  data={data}/>}/>
        <Route  path='/' element={<MainPage isDarkMode={isDarkMode}  data={data} onChange={onChange} searchChange={searchChange} searched={searched} filteredData={filteredData} fetched={fetched}  /> }/>
      
        </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;