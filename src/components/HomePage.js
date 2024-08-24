import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import logo from '../images/logo.jpg';
import home1 from '../images/home1.jpg';
import home2 from '../images/home2.jpg';
import gif1 from '../images/gif1.png';
import gif2 from '../images/gif2.png';
import gif4 from '../images/gif3.png';
import cus1 from '../images/cusprod10.jpg';
import cus2 from '../images/cusprod11.jpg';
import cus3 from '../images/cusprod07.jpg';
import cus4 from '../images/cusprod08.jpg';
import cus5 from '../images/cusprod09.jpg';
import cus6 from '../images/cusprod01.jpg';
import cus7 from '../images/cusprod02.jpg';
import cus8 from '../images/cusprod03.jpg';
import cus9 from '../images/cusprod04.jpg';
import cus10 from '../images/cusprod05.jpg';
import cus11 from '../images/5.jpg';
import Services from './Services.js';
import Contact from './contact.js';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Poppins:wght@300;400;600&display=swap');
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background-color: #000000;
    color: #ffffff;
  }
`;

const HomePage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const backgroundImages = [home2, home1];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 3000); // Change background every 3 seconds

    return () => clearInterval(intervalId);
  }, [backgroundImages.length]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <Logo src={logo} alt="My Mues" />
          <Nav>
            <NavItem>HOME</NavItem>
            <NavItem>ABOUT US</NavItem>
            <NavItem>SERVICES</NavItem>
            <NavItem>CONTACT</NavItem>
            <ShopButton>SHOP</ShopButton>
          </Nav>
          <HamburgerMenu onClick={toggleMenu}>
            <span />
            <span />
            <span />
          </HamburgerMenu>
        </Header>

        <MobileNav isOpen={isOpen}>
          <MobileNavItem onClick={toggleMenu}>HOME</MobileNavItem>
          <MobileNavItem onClick={toggleMenu}>ABOUT US</MobileNavItem>
          <MobileNavItem onClick={toggleMenu}>SERVICES</MobileNavItem>
          <MobileNavItem onClick={toggleMenu}>CONTACT</MobileNavItem>
          <MobileShopButton onClick={toggleMenu}>SHOP</MobileShopButton>
        </MobileNav>

        <HeroSection backgroundImage={backgroundImages[backgroundIndex]}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <HeroContent>
              <SubTitle>UNIQUE GIFTS</SubTitle>
              <HeroTitle>MAKE MEMORIES</HeroTitle>
              <HeroSubtitle>That Last</HeroSubtitle>
              <ShopNowButton>SHOP NOW</ShopNowButton>
            </HeroContent>
          </motion.div>
          <FloatingProduct
            src={gif1}
            alt="Product"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          />
          <FloatingNut1
            src={gif2}
            alt="Gift"
            style={{ transform: `translate(${Math.sin(scrollY * 0.01) * 20}px, ${scrollY * 0.3}px)` }}
          />
          <FloatingBerry
            src={gif4}
            alt="Berry"
            style={{ transform: `translate(${Math.sin(scrollY * 0.02) * 30}px, ${scrollY * 0.35}px)` }}
          />
        </HeroSection>

        <ContentSection>
  <SectionText>
    EXPLORE OUR <Highlight>Exclusive Gifts</Highlight> COLLECTION<br />
    WHERE EVERY ITEM IS <Highlight>Thoughtfully Curated</Highlight> FOR YOU<br />
    MAKE EVERY OCCASION <Highlight>Memorable</Highlight> WITH A TOUCH OF ELEGANCE<br />
    DISCOVER THE PERFECT GIFT THAT <Highlight>SPEAKS FROM THE HEART</Highlight>
  </SectionText>
</ContentSection>


        <ImageGrid>
          <FloatingGridImage src={cus1} alt="Product 1" />
          <FloatingGridImage src={cus2} alt="Product 2" />
          <FloatingGridImage src={cus3} alt="Product 3" />
          <FloatingGridImage src={cus9} alt="Product 2" />
          <FloatingGridImage src={cus10} alt="Product 3" />
        </ImageGrid>

        <ContentSection>
  <SectionText>
    INDULGE IN OUR <Highlight>Handpicked Treasures</Highlight><br />
    PERFECT FOR EVERY MOMENT, FROM <Highlight>Sunrise</Highlight> TO <Highlight>Sunset</Highlight><br />
    ADD A TOUCH OF LUXURY TO YOUR DAY, OR <Highlight>SHARE</Highlight> THE JOY<br />
    WITH A GIFT THAT'S AS SWEET AS <Highlight>Love</Highlight> ITSELF
  </SectionText>
</ContentSection>


        <ImageGrid>
          <FloatingGridImage src={cus4} alt="Product 4" />
          <FloatingGridImage src={cus5} alt="Product 5" />
          <FloatingGridImage src={cus10} alt="Product 6" />
          <FloatingGridImage src={cus7} alt="Product 4" />
          <FloatingGridImage src={cus8} alt="Product 5" />
          
        </ImageGrid>
        
        <Services />
        <Contact />
      </Container>
    </>
  );
};

const floatAnimationTop = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const floatAnimationBottom = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(20px); }
  100% { transform: translateY(0px); }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  overflow: hidden; /* Prevents floating elements from overflowing */
`;

const Header = styled.header`
  display: flex;
  background-color: black;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  z-index: 10; /* Ensures header is on top of other content */
`;

const Logo = styled.img`
  height: 40px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  color: #ffffff;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.a`
  margin-left: 30px;
  cursor: pointer;
  color: #ffffff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 300;

  &:hover {
    color: #ffd700;
    transform: scale(1.1);
    transition: color 0.3s, transform 0.3s;
  }
`;

const ShopButton = styled.button`
  margin-left: 30px;
  padding: 10px 20px;
  background-color: transparent;
  color: #ffffff;
  border: 1px solid #ffd700;
  cursor: pointer;
  font-size: 14px;
  font-weight: 300;

  &:hover {
    background-color: #ffd700;
    color: #000000;
    transform: scale(1.1);
    transition: background-color 0.3s, color 0.3s, transform 0.3s;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background-color: #ffffff;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileNav = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  background-color: #000000;
  position: absolute;
  top: 60px;
  right: 0;
  width: 250px;
  padding: 20px;
  z-index: 10;
`;

const MobileNavItem = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-size: 14px;
  padding: 10px 0;
  text-align: center;

  &:hover {
    color: #ffd700;
    transform: scale(1.1);
    transition: color 0.3s, transform 0.3s;
  }
`;

const MobileShopButton = styled.button`
  padding: 10px 20px;
  background-color: transparent;
  color: #ffffff;
  border: 1px solid #ffd700;
  cursor: pointer;
  font-size: 14px;
  font-weight: 300;
  margin-top: 20px;
  align-self: center;

  &:hover {
    background-color: #ffd700;
    color: #000000;
    transform: scale(1.1);
    transition: background-color 0.3s, color 0.3s, transform 0.3s;
  }
`;

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 50px;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size: cover;
  background-position: center;
  transition: background-image 1s ease-in-out;
`;

const HeroContent = styled.div`
  z-index: 1;
`;

const SubTitle = styled.h3`
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 2px;
  margin-bottom: 20px;
`;

const HeroTitle = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 64px;
  font-weight: 400;
  margin: 0;
`;

const HeroSubtitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 96px;
  font-weight: 700;
  color: #ffd700;
  margin: 0 0 40px 0;
`;

const ShopNowButton = styled.button`
  padding: 15px 30px;
  font-size: 16px;
  background-color: #ffd700;
  color: #000000;
  border: none;
  cursor: pointer;
`;

const FloatingProduct = styled.img`
  position: absolute;
  right: 10%;
  bottom: 10%;
  max-width: 240px; /* Adjust size for responsiveness */
  animation: ${floatAnimationTop} 3s ease-in-out infinite;

  @media (max-width: 768px) {
    max-width: 150px; /* Adjust size for smaller screens */
  }
`;

const FloatingNut1 = styled.img`
  position: absolute;
  right: 20%;
  top: 30%;
  max-width: 40px; /* Adjust size for responsiveness */
  animation: ${floatAnimationBottom} 4s ease-in-out infinite;

  @media (max-width: 768px) {
    max-width: 30px; /* Adjust size for smaller screens */
  }
`;

const FloatingBerry = styled.img`
  position: absolute;
  right: 25%;
  bottom: 20%;
  max-width: 150px; /* Adjust size for responsiveness */
  animation: ${floatAnimationTop} 4.5s ease-in-out infinite;

  @media (max-width: 768px) {
    max-width: 100px; /* Adjust size for smaller screens */
  }
`;

const ContentSection = styled.section`
  padding: 100px 0;
  text-align: center;
`;

const SectionText = styled.p`
  font-family: 'Playfair Display', serif;
  font-size: 24px;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  color: #ffffff;
`;

const Highlight = styled.span`
  color: #ffd700;
  font-style: italic;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 10px;
    margin-bottom: 50px;
  }
`;

const FloatingGridImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
  border: 5px solid #ffd700;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5);

  &:nth-child(odd) {
    animation: ${floatAnimationTop} 4s ease-in-out infinite;
  }

  &:nth-child(even) {
    animation: ${floatAnimationBottom} 4s ease-in-out infinite;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export default HomePage;
