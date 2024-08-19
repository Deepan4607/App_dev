import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import Titlecard from '../../components/titlecard/titlecard';
import './home.css';
import { useNavigate } from 'react-router-dom';
import Slider from '../../components/Slider/Slider';
import All_data from '../../assets/assets/cards/All_data';

const Home = () => {

  const navigate = useNavigate();


  const handleCardClick = (video) => {
    navigate('/detailspage', { state: { video } });
  };

  return (
    <div className='home'>
      <Navbar />
      <div className='hero'>
        <Slider/>
      </div>
      <div className='morecards'>
        <Titlecard />
      </div>

      <div className='main-wrapper'>
        <div className='container'>
          <div className='main-content'>
            <h2>Recendly Added</h2>
            <div className='card-container'>
            {All_data.map((card, index) => (
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
            ))}
          </div>
            </div>
          <div className='sidebar'>
            <div className='genres-section'>
              <h3>Genres</h3>
              <div className='genres'>
                <ul>
                  <li><button>Action</button></li>
                  <li><button>Adventure</button></li>
                  <li><button>Comedy</button></li>
                  <li><button>Drama</button></li>
                  <li><button>Fantasy</button></li>
                  <li><button>Horror</button></li>
                  <li><button>Mystery</button></li>
                  <li><button>Romance</button></li>
                  <li><button>Sci-Fi</button></li>
                  <li><button>Historical</button></li>
                </ul>
              </div>
            </div>
            <div className='toprating-section'>
              <h3>Top 5 Movies</h3>
              <div className='toprating'>
                <ul>
                <li><button>1. The Dark Knight</button></li>
                <li><button>2. The Shawshank Redemption</button></li>
                <li><button>3. Harry Potter</button></li>
                <li><button>4. Old boy</button></li>
                <li><button>5. Master</button></li>
                </ul>
              </div>
            </div>
            <div className='toprating-section'>
              <h3>Top 5 Series</h3>
              <div className='toprating'>
                <ul>
                <li><button>1. Dark</button></li>
                <li><button>2. The Boys</button></li>
                <li><button>3. Stranger Things</button></li>
                <li><button>4. Breaking Bad</button></li>
                <li><button>5. Squid Game</button></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
