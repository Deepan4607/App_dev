import React, { useState } from 'react';
import './FilterPage.css';
import { useNavigate, useLocation } from 'react-router-dom';
import All_data from '../../assets/assets/cards/All_data';
import Navbar from '../../components/navbar/navbar'

const FilterPage = () => {
  const [filters, setFilters] = useState({
    type: 'All',
    rated: 'All',
    language: 'All',
    genre: []
  });

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query') || '';

  const navigate = useNavigate();

  const filteredResults = All_data.filter(card =>
    card.name.toLowerCase().includes(query.toLowerCase()) &&
    (filters.type === 'All' || card.type === filters.type) &&
    (filters.rated === 'All' || card.rated === filters.rated) &&
    (filters.language === 'All' || card.languages.includes(filters.language)) && // Updated language filtering
    (filters.genre.length === 0 || filters.genre.every(genre => card.genres.includes(genre))) // Updated genre filtering
  );

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleGenreToggle = (genre) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      genre: prevFilters.genre.includes(genre)
        ? prevFilters.genre.filter(g => g !== genre)
        : [...prevFilters.genre, genre],
    }));
  };

  const handleCardClick = (video) => {
    navigate('/detailspage', { state: { video } });
  }; 

  return (
    <div className="filter-page">
      <Navbar />
      <div className="filter-section">
        <h2>Filter</h2>
        <div className="filter-options">
          {/* Type Filter */}
          <div className="filter-group">
            <label>Type</label>
            <select onChange={handleFilterChange} name="type" value={filters.type}>
              <option value="All">All</option>
              <option value="Movie">Movie</option>
              <option value="Series">Series</option>
              <option value="Anime">Anime</option>
            </select>
          </div>

          {/* Rated Filter */}
          <div className="filter-group">
            <label>Rated</label>
            <select onChange={handleFilterChange} name="rated" value={filters.rated}>
              <option value="All">All</option>
              <option value="G">G</option>
              <option value="UA">UA</option>
              <option value="PG">PG</option>
              <option value="PG-13">PG-13</option>
              <option value="TV-14">TV-14</option>
              <option value="TV-MA">TV-MA</option>
              <option value="R">R</option>
              <option value="NC-17">NC-17</option>
            </select>
          </div>

          {/* Language Filter */}
          <div className="filter-group">
            <label>Language</label>
            <select onChange={handleFilterChange} name="language" value={filters.language}>
              <option value="All">All</option>
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="Tamil">Tamil</option>
              <option value="Japanese">Japanese</option>
              <option value="Hindi">Hindi</option>
              <option value="Malayalam">Malayalam</option>
              <option value="Telugu">Telugu</option>
              {/* Add more languages as needed */}
            </select>
          </div>

          {/* Genre Filter */}
          <div className="filter-genre">
            <label>Genre</label>
            <div className="genre-options">
              {['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Romance', 'Sci-Fi', 'Historical'].map((genre) => (
                <span
                  key={genre}
                  className={`genre-item ${filters.genre.includes(genre) ? 'selected' : ''}`}
                  onClick={() => handleGenreToggle(genre)}
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="filter-results">
        <h2>Filter Results</h2>
        <p>{filteredResults.length} result(s) found for "{query}"</p>
        <div className='card-container'>
          {filteredResults.length > 0 ? (
            filteredResults.map((card, index) => (
              <div 
                key={index} 
                className='card'
                onClick={() => handleCardClick(card)}
              >
                <img src={card.image} alt={card.name} />
                <div className="card-details">
                  <h3>{card.name}</h3>
                  <p className="imdb-rating">IMDb: {card.imdbRating}</p>
                  <div className="play-button"></div>
                </div>
              </div>
            ))
          ) : (
            <p>No results found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterPage;
