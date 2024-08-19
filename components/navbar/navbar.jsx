import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import profileimg from '../../assets/eren.jpg';
import careticon from '../../assets/assets/caret_icon.svg';
import searchicon from '../../assets/assets/search_icon.svg'; 
import './navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const signout = () => navigate('/login');
  const home = () => navigate('/');
  const movie = () => navigate('/movie');
  const anime = () => navigate('/anime');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      // Navigate to the filter page with search query
      navigate(`/filterpage?query=${encodeURIComponent(searchQuery)}`);
    }
  };
  const handleFilterSubmit = (e) => {
    e.preventDefault();
    navigate(`/filterpage`);
  };
  const handleprofile = (e) => {
    navigate(`/profile`);
  };

  return (
    <div className='navbar'>
      <div className='nav-left'>
        <ul>
          <li onClick={home}>Home</li>
          <li onClick={movie}>Movie/Tv</li>
          <li onClick={anime}>Anime</li>
          <li>Downloads</li>
        </ul>
      </div>
      <div className='nav-right'>
        <form onSubmit={handleSearchSubmit} className='search'>
          <input
            type='text'
            placeholder='Search'
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button
            type='button'
            onClick={handleFilterSubmit}
            className='filter-button'
          >Filter
          </button>
          <button type='submit'>
            <img src={searchicon} alt='Search' className='search-icon' />
          </button>
        </form>
        <div className='nav-profile'>
          <img src={profileimg} alt='Profile' className='profile' />
          <img src={careticon} alt='Caret' />
          <div className='dropdown'>
            <button onClick={() => navigate('/profile')}>Profile</button>
            <button onClick={signout}>Sign Out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
