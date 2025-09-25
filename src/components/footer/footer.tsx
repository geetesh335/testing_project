import React from "react";
import styled from "styled-components";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <h3>TechAshtra</h3>
        <p>
          Providing innovative and reliable TechAshtra for your business needs.
        </p>
        <SocialIcons>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </SocialIcons>
      </FooterContent>
      <Copyright>
        © {new Date().getFullYear()} TechAshtra. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background: #282c34;
  color: #fff;
  text-align: center;
  padding: 2rem 1rem;
`;

const FooterContent = styled.div`
  max-width: 800px;
  margin: 0 auto;

  h3 {
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  a {
    color: #fff;
    font-size: 1.5rem;

    &:hover {
      color: #61dafb;
    }
  }
`;

const Copyright = styled.p`
  margin-top: 2rem;
  font-size: 0.9rem;
`;
