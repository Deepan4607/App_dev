import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Detailspage.css';
import Footer from '../../components/footer/footer';
import { FaThumbsUp, FaThumbsDown, FaFileDownload, FaArrowLeft, FaPlus } from 'react-icons/fa';

const Detailspage = () => {
  const location = useLocation();
  const { video } = location.state || {};
  const navigate = useNavigate();
  const [selectedSeason, setSelectedSeason] = useState(null);
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [likes, setLikes] = useState(6);
  const [dislikes, setDislikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    fetchLikesDislikes();
    fetchComments();
  }, []);

  const fetchLikesDislikes = async () => {
    
  };

  const fetchComments = async () => {

  };

  const handleLike = async () => {
    setLikes(likes + 1);
  };

  const handleDislike = async () => {
    setDislikes(dislikes + 1);
  };

  const handleAddComment = async () => {

  };

  const handlePlay = (video) => {
    navigate('/player', { state: { video } });
  };
  
  const handleBack = () => {
    navigate(-1); 
  };

  if (!video) {
    return <div>No video data available</div>;
  }

  return (
    <div className='Detailspage'>
      <div className='detailsmain'>
        <button className='back-button' onClick={handleBack}>
          <FaArrowLeft />
        </button>
        <div 
          className='poster-background' 
          style={{ backgroundImage: `url(${video.image})` }}
        />
        <div className='content-overlay'>
          <div className='poster'>
            <img src={video.image} alt={video.name} />
          </div>
          <div className='details'>
            <h2>{video.name}</h2>
            <p><span>IMDb Rating:</span> {video.imdbRating}</p>
            <p><span>Type:</span> {video.type}</p>
            <p><span>Rated:</span> {video.rated}</p>
            <p><span>Languages:</span> {video.languages.join(', ')}</p>
            <p><span>Duration:</span> {video.duration}</p>
            <p>{video.description}</p>
            <p className='genre'>{video.genres.join(' | ')}</p>
            
            
            {video.type === "Series" || video.type === "Anime" ? (
              <>
              <select onChange={(e) => setSelectedSeason(e.target.value)} value={selectedSeason}>
              <option value="">Seasons</option>
              {video.seasons.map((season, index) => (
                <option key={index} value={index}>Season {season.season}</option>
              ))}
              </select>
              <div className="like-dislike-buttons">
                <button className="like-button" onClick={handleLike}>
                  <FaThumbsUp /> {likes}
                </button>
                <button className="dislike-button" onClick={handleDislike}>
                  <FaThumbsDown /> {dislikes}
                </button>
              </div>
              {selectedSeason !== null && (
                <div className="episode-grid">
                {video.seasons[selectedSeason].episodes.map((episode, episodeIndex) => (
                  <div
                  key={episodeIndex}
                  className={`episode-item ${selectedEpisode === episodeIndex ? 'selected' : ''}`}
                  onClick={() => {
                    setSelectedEpisode(episodeIndex);
                    handlePlay(episode.video);
                  }}
                  >
                  Episode {episodeIndex + 1}
                  </div>
                ))}
                </div>
              )}
              </>
            ) : 
            <div className='play'>
            <button className='play-btn' onClick={() => handlePlay(video.video)}>Watch Now  ▶</button>
            <button className='play-btn'><FaPlus/></button>
            <div className="like-dislike-buttons">
              <button className="like-button" onClick={handleLike}>
                <FaThumbsUp /> {likes}
              </button>
              <button className="dislike-button" onClick={handleDislike}>
                <FaThumbsDown /> {dislikes}
              </button>
            </div>
          </div>
        }
          </div>
        </div>
      </div>
      <div className='comments'>
        <h3>Comments</h3>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment/review"
        />
        <button onClick={handleAddComment}>Post</button>
        <ul>
          <li>Vetrimaaran:  Good</li>
        </ul>
      </div>
      <div className='footer'>
        <div className='footerin'>
          <Footer />
        </div>
      </div>
    </div>
  );  
}  

export default Detailspage;
