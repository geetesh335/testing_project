import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

// Letter animation keyframe definition
const letterAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  50% {
    opacity: 0.5;
    transform: translateY(0);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Body: React.FC = () => {
  const [animationClass, setAnimationClass] = useState<string>("");

  useEffect(() => {
    setTimeout(() => {
      setAnimationClass("fade-in");
    }, 100); // Delay before animation starts
  }, []);

  return (
    <HeroContainer>
      <ContentWrapper className={animationClass}>
        <Title>
          <h1>Welcome to TechAshtra</h1>
        </Title>
        <Description>
          <p>
            Providing innovative and reliable TechAshtra for your business
            needs.
          </p>
        </Description>
      </ContentWrapper>
    </HeroContainer>
  );
};

export default Body;

const HeroContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #282c34;
  color: #fff;
  text-align: center;
  padding: 0 2rem;
  flex-direction: column;

  @media (max-width: 768px) {
    height: auto;
    padding: 3rem 1rem;
  }
`;

const ContentWrapper = styled.div`
  opacity: 0;
  animation: ${fadeIn} 1.5s ease-out forwards;
  max-width: 1200px;
  width: 100%;
  padding: 0 1rem;

  &.fade-in {
    animation: ${fadeIn} 2s ease-out forwards;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const Title = styled.div`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-transform: uppercase;
  
  h1 {
    display: inline-block;
    animation: ${letterAnimation} 2s ease forwards;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.div`
  font-size: 1.5rem;
  line-height: 1.5;
  margin-top: 1rem;
  animation: ${letterAnimation} 2.5s ease forwards;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;
