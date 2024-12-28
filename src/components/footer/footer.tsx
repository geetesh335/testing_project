// Footer.tsx
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  width: 100%;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap; /* Allows columns to wrap on smaller screens */
  overflow-x: hidden; /* Prevent horizontal scrolling */
  box-sizing: border-box; /* Include padding in the width and height calculation */
`;

const Column = styled.div`
  flex: 1;
  margin: 10px;
  min-width: 200px; /* Prevent columns from shrinking too much */
  max-width: 100%; /* Ensure columns do not exceed the container's width */
  box-sizing: border-box; /* Include padding in the width and height calculation */
`;

const FooterLink = styled.a`
  color: #00d8ff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ServicesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0;
`;

const ServiceItem = styled.li`
  margin: 5px 0;
`;

const ContactInfo = styled.div`
  line-height: 1.6;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Column>
        <h3>Our Services</h3>
        <ServicesList>
          <ServiceItem>Web Development</ServiceItem>
          <ServiceItem>Mobile App Development</ServiceItem>
          <ServiceItem>UI/UX Design</ServiceItem>
          <ServiceItem>Cloud Solutions</ServiceItem>
          <ServiceItem>IT Consulting</ServiceItem>
        </ServicesList>
      </Column>

      <Column>
        <h3>Contact Information</h3>
        <ContactInfo>
          <p>Email: <FooterLink href="mailto:contact@yourcompany.com">hr@Knowleadgeastra.com</FooterLink></p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: 123/7 PU4 behind c21 mall, Indore, India</p>
        </ContactInfo>
      </Column>

      <Column>
        <h3>Follow Us</h3>
        <p>
          <FooterLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</FooterLink> |
          <FooterLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</FooterLink> |
          <FooterLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</FooterLink>
        </p>
      </Column>
    </FooterContainer>
  );
};

export default Footer;
