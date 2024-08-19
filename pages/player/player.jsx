import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './player.css';
import { FaArrowLeft } from 'react-icons/fa';

const Player = () => {
  const location = useLocation();
  const { video } = location.state || {};
  const videoRef = useRef(null);
  const [audioTracks, setAudioTracks] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const videoElement = videoRef.current;

    const updateAudioTracks = () => {
      if (videoElement && videoElement.audioTracks) {
        const tracks = Array.from(videoElement.audioTracks);
        setAudioTracks(tracks);
      }
    };

    if (videoElement) {
      videoElement.addEventListener('loadedmetadata', updateAudioTracks);
      videoElement.addEventListener('play', updateAudioTracks);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('loadedmetadata', updateAudioTracks);
        videoElement.removeEventListener('play', updateAudioTracks);
      }
    };
  }, [video]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'b' && audioTracks.length > 1) {
        const nextTrack = (selectedTrack + 1) % audioTracks.length;
        setSelectedTrack(nextTrack);

        const videoElement = videoRef.current;
        if (videoElement.audioTracks) {
          for (let i = 0; i < videoElement.audioTracks.length; i++) {
            videoElement.audioTracks[i].enabled = i === nextTrack;
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [audioTracks, selectedTrack]);

  const handleTrackChange = (e) => {
    const selectedTrackIndex = parseInt(e.target.value, 10);
    setSelectedTrack(selectedTrackIndex);

    const videoElement = videoRef.current;
    if (videoElement.audioTracks) {
      for (let i = 0; i < videoElement.audioTracks.length; i++) {
        videoElement.audioTracks[i].enabled = i === selectedTrackIndex;
      }
    }
  };

  const handleBack = () => {
    navigate(-1); // Navigates to the previous page in the history stack
  };

  return (
    <div className="videoContainer">
      <button className="back-button" onClick={handleBack}>
        <FaArrowLeft />
      </button>
      {video && (
        <>
          <video ref={videoRef} controls width="100%" height="100%">
            <source src={video} type="video/mp4" />
            {/* Add other video formats as needed */}
          </video>
          {audioTracks.length > 1 && (
            <div className="audioTrackSelector">
              <label htmlFor="audioTrack">Audio:</label>
              <select
                id="audioTrack"
                value={selectedTrack}
                onChange={handleTrackChange}
              >
                {audioTracks.map((track, index) => (
                  <option key={index} value={index}>
                    {track.label || `Track ${index + 1}`}
                  </option>
                ))}
              </select>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Player;
