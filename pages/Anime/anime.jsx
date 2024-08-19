import React from 'react';
import { useNavigate,Navigate } from 'react-router-dom';
import Footer from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar'
import './anime.css';
import Titlecard2 from '../../components/titlecard/titlecard2';
import movie1 from '../../assets/assets/cards/videos/SPIDER-MAN.mp4'
import bgv from '../../assets/Particles.mp4'

import img1 from '../../assets/assets/cards/onepiece.jpg';
import img2 from '../../assets/assets/cards/hxh.jpg';
import img3 from '../../assets/assets/cards/naruto.jpg';
import img4 from '../../assets/assets/cards/myhero.jpg';
import img5 from '../../assets/assets/cards/dbz.jpg';
import img6 from '../../assets/assets/cards/deathnote.jpg'; 
import img7 from '../../assets/assets/cards/demon.jpg'; 
import img8 from '../../assets/assets/cards/jjk.jpg'; 
import img9 from '../../assets/assets/cards/monster.jpg';
import img10 from '../../assets/assets/cards/cowboy.jpg'; 

const Anime = () => {
  
  const navigate = useNavigate();

  const handleClick = (video) => {
    navigate('/detailspage', { state: { video } });
  };

  return (
    <div className='anime'>
    <Navbar/>
    <div className='animepage'>
    <video autoPlay loop id='videoo'>
        <source src={bgv} type='video/mp4'/>
    </video>
      <h1>Anime</h1>
      <h3>Popular Animes</h3>
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
            <Titlecard2 title={"New Gen"}/>
            <Titlecard2 title={"Old Gen"}/>
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default Anime;
