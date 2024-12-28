import React from 'react';
import styled from 'styled-components';
import Header from '../header/Header';

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden; /* Ensures that nothing overflows outside this container */
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure the video covers the container */
  z-index: -1; /* Video stays behind other content */
`;

const Content = styled.div`
  position: relative; /* Keeps the content on top of the video */
  z-index: 1; /* Ensures content is above the video */
  color: white; /* Change text color as needed */
  text-align: center; /* Center-align text */
  padding: 20px; /* Add some padding */
`;

const Body: React.FC = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (videoRef.current) {
      // videoRef.current.playbackRate = 0.3; // Adjust playback speed
    }
  }, []);

  return (
    <VideoContainer>
      <BackgroundVideo ref={videoRef} autoPlay loop muted>
        <source src={require('../../assets/videos/chess_video.mp4')} type="video/mp4" />
        Your browser does not support HTML5 video.
      </BackgroundVideo>
      <Content>
        <Header />
      </Content>
    </VideoContainer>
  );
};

export default Body;
