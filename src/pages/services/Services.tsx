// src/components/Services/Services.tsx
import React from "react";
import styled from "styled-components";

const Services: React.FC = () => {
  return (
    <ServicesContainer>
      <Title>Our Services</Title>
      <ServicesList>
        <ServiceItem>
          <h3>Website Development</h3>
          <p>We create stunning, responsive websites tailored to your business needs.</p>
        </ServiceItem>
        <ServiceItem>
          <h3>Mobile Application Development</h3>
          <p>We develop powerful mobile apps for iOS and Android platforms.</p>
        </ServiceItem>
        <ServiceItem>
          <h3>AI Solutions</h3>
          <p>We offer AI-driven solutions to automate and optimize business processes.</p>
        </ServiceItem>
      </ServicesList>
    </ServicesContainer>
  );
};

export default Services;

const ServicesContainer = styled.section`
  padding: 3rem 2rem;
  background: #f4f4f4;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
`;

const ServicesList = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    display: block;  // On small screens, display services vertically
    text-align: left;
  }
`;

const ServiceItem = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 30%;
  transition: transform 0.3s ease;

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
