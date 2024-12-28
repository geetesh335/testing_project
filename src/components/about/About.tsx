// TwoColumnLayout.tsx
import React from 'react';
import styled, { keyframes } from 'styled-components';
import animatedImage from '/assets/images/images.jpg'; // Replace with your animated image

// Define the keyframes for the spring animation
const springAnimation = keyframes`
  0% {
    transform: scale(1); /* Start at normal size */
  }
  20% {
    transform: scale(1.1); /* Scale up to 110% */
  }
  40% {
    transform: scale(0.9); /* Scale down to 90% */
  }
  60% {
    transform: scale(1.05); /* Scale up slightly */
  }
  100% {
    transform: scale(1); /* Return to normal size */
  }
`;

// Styled component for the container
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh; /* Full height */
`;

// Styled component for the content column
const ContentColumn = styled.div`
  flex: 1; /* Take up half of the available space */
  
  padding: 20px; /* Add some padding */
  background-color: #f5f5f5; /* Light background for contrast */
`;

// Styled component for the image column
const ImageColumn = styled.div`
  flex: 1; /* Take up half of the available space */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Prevent overflow */
  position: relative; /* Required for absolute positioning of the animated image */

  /* Animated image properties */
  &::before {
    content: '';
    background-image: url('/assets/images/images.jpg');
    background-size: cover; /* Adjust to cover the entire area */
    background-position: center;
    position: absolute;
    width: 100%; /* Fit to column size */
    height: 100%;
    top: 0;
    left: 0;
    animation: ${springAnimation} 2s ease-in-out infinite; /* Spring animation */
    z-index: 1; /* Layer below the content */
  }
`;

const About: React.FC = () => {
  return (
    <Container>
      <ContentColumn>
        <div>
          <h1>Knowleadge Astra</h1>
          <p>
            Welcome to our company! We provide exceptional services to meet your needs. Our team is dedicated to delivering the best results.
          </p>
          <p>
            Contact us for more information about our services, and how we can help you achieve your goals.
          </p>
        </div>
        <div>
          <h1>What we do</h1>
          <p>
            At TechAstra, we specialize in website design and development, 
            mobile app development, internet marketing, and creative solutions 
            that help businesses stand out in the digital world. We believe every
            company has unique potential, and our mission is to uncover and amplify
            that potential, ensuring they shine in an ever-evolving digital 
            landscape. Our team brings the WOW factor to life by combining 
            innovative design, cutting-edge technology, and strategic marketing 
            to create exceptional user experiences that drive engagement and growth. 
            Whether you're looking to build a stunning website, develop a seamless 
            mobile app, or elevate your brand through powerful digital marketing 
            strategies, we are here to make it happen. With our deep industry expertise 
            and a passion for creativity, we transform your ideas into impactful solutions
            that not only meet but exceed your business goals. At TechAstra, we don’t 
            just deliver services—we empower your business to thrive in the digital 
            era, giving you the competitive edge you deserve.
          </p>
        </div>
      </ContentColumn>
      
      <ImageColumn />
    </Container>
  );
};

export default About;
