import React from "react";
import styled from "styled-components";

// Import local images
import WebsiteProjectImage from "../../assets/images/website.jpg"; // Adjust path as needed
import MobileAppProjectImage from "../../assets/images/mobile_app_image.avif"; // Adjust path as needed
import AIProjectImage from "../../assets/images/ai.jpg"; // Adjust path as needed

const Projects = () => {
  return (
    <ProjectsContainer>
      <Title>Our Projects</Title>
      <ProjectList>
        <ProjectItem>
          <ImageWrapper>
            <ProjectImage
              src={WebsiteProjectImage}
              alt="Website Development Project"
            />
          </ImageWrapper>
          <h3>Website Development</h3>
          <p>
            We delivered 5+ stunning websites with custom designs and seamless user experiences.
          </p>
        </ProjectItem>
        <ProjectItem>
          <ImageWrapper>
            <ProjectImage
              src={MobileAppProjectImage}
              alt="Mobile App Development Project"
            />
          </ImageWrapper>
          <h3>Mobile Application</h3>
          <p>
            We developed user-friendly mobile applications for iOS and Android that cater to business needs.
          </p>
        </ProjectItem>
        <ProjectItem>
          <ImageWrapper>
            <ProjectImage
              src={AIProjectImage}
              alt="AI Solutions Project"
            />
          </ImageWrapper>
          <h3>AI Solutions</h3>
          <p>
            We implemented AI-driven solutions to optimize processes and boost business efficiency.
          </p>
        </ProjectItem>
      </ProjectList>
    </ProjectsContainer>
  );
};

export default Projects;

const ProjectsContainer = styled.section`
  padding: 4rem 2rem;
  background: #f4f4f4;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
`;

const ProjectList = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    display: block;
    text-align: left;
  }
`;

const ProjectItem = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 30%;
  transition: transform 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 1.5rem;
  }

  h3 {
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 0.8rem;
  }

  p {
    font-size: 1rem;
    color: #555;
  }
`;

const ImageWrapper = styled.div`
  margin-bottom: 1.5rem;
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 8px;
  position: relative;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
