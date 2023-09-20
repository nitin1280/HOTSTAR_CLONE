import React, { useState, useEffect } from 'react';
import './search.css';
import { Link } from 'react-router-dom';

const Search = () => {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const API = `https://academics.newtonschool.co/api/v1/ott/show?limit=100`;

  useEffect(() => {
    const fetchApiData = async (url) => {
      const headers = {
        projectId: 'f104bi07c490',
      };
      try {
        const res = await fetch(url, { headers });
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setItems(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchApiData(API);
  }, []);

  const handleSearch = () => {
    const filtered = items.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filtered);
  };

  const handleInputChange = (value) => {
    setSearchQuery(value);
    const suggested = items.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase()),
    );
    setSuggestions(suggested);
  };

  return (
    <div>
        
      {/* <h2>Search</h2> */}
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="search-container">
      <a href='/home'><img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/v1656431456/web-images/logo-d-plus.svg" alt="" className="lmg"/></a>
        <input
          type="text" id='search-input'
          value={searchQuery}
          placeholder='Movies,Web Series,Tv Show'
          onChange={(e) => handleInputChange(e.target.value)}
        />
        {/* <button className="button" onClick={handleSearch}>
          Search
        </button> */}
      </div>

      <div className="suggestions">
        {suggestions.map((suggestion, index) => (
          <>
           <Link to={`/${suggestion._id}`}>
          <div className="suggestion-card" key={index}>
            <img src={suggestion.thumbnail} alt={suggestion.title} />
            <p>Title: {suggestion.title}</p>
            <p>Type: {suggestion.type}</p>
            {/* <button className="button">Play</button> */}
            <button className="button">+Watch</button>
          </div>
          </Link>
          </>
        ))}
      </div>
      

      <div className="container7">
        {searchResults.length > 0 ? (
          searchResults.map((flight, index) => (
            <div className="card" key={index}>
              <img src={flight.thumbnail} alt={flight.title} className='img5'/>
              <p>Title: {flight.title}</p>
              <p>Type: {flight.type}</p>
              {/* <button className="button">Play</button> */}
              <button className="button">+Watch</button>
            </div>
          ))
        ) : (
          items.map((flight, index) => (
            <>
           <Link to={`/${flight._id}`}>
            <div className="card8" key={index}>
              <img src={flight.thumbnail} alt={flight.title} className='img5'/>
              <p>Title: {flight.title}</p>
              <p>Type: {flight.type}</p>
              {/* <button className="button">Play</button> */}
              <button className="button">+Watch</button>
            </div>
            </Link>
            </>
          ))
        )}
      </div>
    </div>
  );
};

export default Search;
