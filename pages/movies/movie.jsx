import React from 'react'
import { useNavigate,Navigate } from 'react-router-dom';

import './movie.css'
import Footer from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar'
import Titlecard from '../../components/titlecard/titlecard'
import Titlecard2 from '../../components/titlecard/titlecard2';

import img1 from '../../assets/assets/cards/fightclub.jpg';
import img2 from '../../assets/assets/cards/pulb.jpg';
import img3 from '../../assets/assets/cards/Shawshank_Redemption.jpg';
import img4 from '../../assets/assets/cards/Interstellar.jpg';
import img5 from '../../assets/assets/cards/jurassic.jpg';
import img6 from '../../assets/assets/cards/godzilla-vs-kong.jpg'; 
import img7 from '../../assets/assets/cards/breaking.jpg'; 
import img8 from '../../assets/assets/cards/lastofus.jpg'; 
import img9 from '../../assets/assets/cards/stranger.jpg';
import img10 from '../../assets/assets/cards/master.jpg';

const Movie = () => {
  
  const navigate = useNavigate();

  const handleClick = (video) => {
    navigate('/detailspage', { state: { video } });
  };

  return (
    <div className='movie'>
    <Navbar/>
    <div className='moviepage'>
      <h1>Movie</h1>
      <h3>Top Movies/Series Of All Time</h3>
        <div className='banner'> 
          <div className='slide' style={{ '--quantity': 10 }}>
            <div className='item' style={{ '--position': 1 }}><img src={img1} alt=''/></div>
            <div className='item' style={{ '--position': 2 }}><img src={img2} alt=''/></div>
            <div className='item' style={{ '--position': 3 }}><img src={img3} alt=''/></div>
            <div className='item' style={{ '--position': 4 }}><img src={img4} alt=''/></div>
            <div className='item' style={{ '--position': 5 }}><img src={img5} alt=''/></div>
            <div className='item' style={{ '--position': 6 }}><img src={img6} alt=''/></div>
            <div className='item' style={{ '--position': 7 }}><img src={img7} alt=''/></div>
            <div className='item' style={{ '--position': 8 }}><img src={img8} alt=''/></div>
            <div className='item' style={{ '--position': 9 }}><img src={img9} alt=''/></div>
            <div className='item' style={{ '--position': 10 }}><img src={img10} alt=''/></div>
          </div>
        </div>
        <div className='morecards'>
            <Titlecard2 title={"Latest Movies"}/>
            <Titlecard2 title={"Old Gen"}/>
        </div>
        <Footer/>
      </div>
    </div>
  );
}


export default Movie