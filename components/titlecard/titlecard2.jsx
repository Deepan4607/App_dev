import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './titlecard.css';
import anime_data from '../../assets/assets/cards/anime_data';

const Titlecard2 = ({ title }) => {
  const CardsRef = useRef();
  const navigate = useNavigate();

  const handleWheel = (event) => {
    event.preventDefault();
    if (CardsRef.current) {
      CardsRef.current.scrollLeft += event.deltaX;
    }
  };

  useEffect(() => {
    const currentCardsRef = CardsRef.current;
    if (currentCardsRef) {
      currentCardsRef.addEventListener('wheel', handleWheel);
    }
    return () => {
      if (currentCardsRef) {
        currentCardsRef.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  const handleClick = (video) => {
    navigate('/detailspage', { state: { video } });
  };

  return (
    <div className='title-card'>
      <h4>{title ? title : <h4>Popular on <span>Gemini</span></h4>}</h4>
      <div className='row' ref={CardsRef}>
        <div className='row__inner'>
          {anime_data.map((card, index) => (
            <div className='tile' key={index} onClick={() => handleClick(card)}>
              <img className='tile__img' src={card.image} alt='' />
              <div className='tile__details'>
                <p>{card.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Titlecard2;
