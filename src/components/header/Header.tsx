import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

// Define the types for the mobile menu icon props
interface IconProps {
  size: number;
  onClick: () => void;
}

const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <HeaderContainer>
      <Logo>
        <Link to="/">TechAshtra</Link>
      </Logo>
      <Nav isMobileMenuOpen={isMobileMenuOpen}>
        <ul>
          <li>
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={() => setMobileMenuOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </Nav>
      <MobileMenu>
        {/* Wrap icons in div for onClick */}
        <div onClick={toggleMenu}>
          {isMobileMenuOpen ? (
            <FaTimes size={24} />
          ) : (
            <FaBars size={24} />
          )}
        </div>
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header;

// Styled components for the header

interface NavProps {
  isMobileMenuOpen: boolean;
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #282c34;
  color: #fff;
  position: relative;
  z-index: 10;
  width: 100%;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;

  a {
    text-decoration: none;
    color: #61dafb;
  }
`;

const Nav = styled.nav<NavProps>`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  ul {
    display: flex;
    gap: 1.5rem;
    list-style: none;
  }

  li {
    a {
      text-decoration: none;
      color: #fff;
      font-size: 1rem;

      &:hover {
        color: #61dafb;
      }
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? "0" : "-100%")};
    width: 100%;
    height: 100%;
    background: #282c34;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: left 0.3s ease-in-out;

    ul {
      flex-direction: column;
      gap: 2rem;

      li a {
        font-size: 1.5rem;
      }
    }
  }
`;

const MobileMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    z-index: 15;
  }
`;
