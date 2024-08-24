import React from 'react';
import styled from 'styled-components';

// Import images from the src folder
import Img1 from '../images/services/1.jpeg'; 
import Img2 from '../images/services/2.jpeg';   
import Img3 from '../images/services/3.jpeg';  
import Img4 from '../images/services/4.jpeg'; 

const Services = () => {
  const services = [
    {
      title: "Custom Gift Designs",
      description: "Visualize and customize gift designs in real-time, ensuring satisfaction before purchase.",
      imageUrl: Img4,
    },
    {
      title: "Gift Collections",
      description: "Browse and explore diverse collections of gifts. Categories available for different occasions and preferences.",
      imageUrl: Img1,
    },
    {
      title: "Gift Products",
      description: "High-quality gift products such as personalized items, gift baskets, and specialty kits for various occasions.",
      imageUrl: Img3,
    },
    {
      title: "Expert Gift Wrapping",
      description: "Quick and convenient gift wrapping services for busy individuals, offering intricate designs in a short time frame.",
      imageUrl: Img2,
    }
  ];

  return (
    <Container>
      <Heading>Our Services</Heading>
      <ServicesWrapper>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            <ServiceImage src={service.imageUrl} alt={service.title} />
            <ServiceContent>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ServiceButton>View More</ServiceButton>
            </ServiceContent>
          </ServiceCard>
        ))}
      </ServicesWrapper>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  padding: 40px;
  font-family: 'Playfair Display', serif;
  background-color: #000000;
  color: #ffffff;
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 3em;
  margin-bottom: 40px;
  font-family: 'Playfair Display', serif;
`;

const ServicesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 30px;
`;

const ServiceCard = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: #1c1c1c;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5);

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ServiceImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;

  @media (min-width: 768px) {
    width: 50%;
    height: 200px;
  }
`;

const ServiceContent = styled.div`
  padding: 20px;
  width: 100%;
  color: #ffffff;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const ServiceTitle = styled.h2`
  margin-top: 0;
  font-size: 1.5em;
  color: #FFD100;
`;

const ServiceDescription = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 1em;
  color: #dddddd;
`;

const ServiceButton = styled.button`
  background-color: #ffd700;;
  color: #000000;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  font-family: 'Poppins', sans-serif;

  &:hover {
    background-color: #333333;
    color: #ffd700;
    transition: background-color 0.3s, color 0.3s;
  }
`;

export default Services;
