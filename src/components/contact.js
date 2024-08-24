import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.jpg'; 
import home1 from '../images/home1.png';

const Contact = () => {
  return (
    <>
      <Heading>Contact Us</Heading>
      <Container>
        <ImageSection>
          <img src={home1} alt="contact" />
        </ImageSection>
        <FormSection>
          <Logo src={logo} alt="Logo" />
          <Form>
            <FormGroup>
              <Label htmlFor="fullName">Full Name</Label>
              <Input type="text" id="fullName" name="fullName" placeholder="Full Name" />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" name="email" placeholder="Email" />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">Leave a message...</Label>
              <Textarea id="message" name="message" rows="4" placeholder="Leave a message..." />
            </FormGroup>
            <SubmitButton type="submit">Send Message</SubmitButton>
          </Form>
        </FormSection>
      </Container>
      <Footer>
        <FooterText>© 2024 Gift Galaxy. All Rights Reserved.</FooterText>
      </Footer>
    </>
  );
};

// Styled components
const Heading = styled.h1`
  text-align: center;
  font-size: 2.5em;
  margin-bottom: 20px;
  font-family: 'Times New Roman', serif;
  font-weight: normal;
  color: #ffffff;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #000000;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ImageSection = styled.div`
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  @media (min-width: 768px) {
    width: 50%;
    margin-bottom: 0;
  }
`;

const FormSection = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const Logo = styled.img`
  display: block;
  margin: 0 auto 20px;
  width: 100px;
  height: auto;
`;

const Form = styled.form``;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  padding: 10px;
  color: #333;
  font-size: 14px;
`;

const Input = styled.input`
  width: 100%;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  resize: none;
`;

const SubmitButton = styled.button`
  background-color: #804f0e;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #663b0b;
  }
`;

const Footer = styled.footer`
  background-color: black;
  color: white;
  padding: 20px;
  text-align: center;
  margin-top: 20px;
  position: relative;
  bottom: 0;
  width: 100%;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 14px;
`;

export default Contact;
