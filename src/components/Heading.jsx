import styled from 'styled-components';

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 64px 32px;
  font-family: 'Roboto';
`;

const Time = styled.p`
  font-size: 24px;
  font-weight: bold;
  opacity: 0.75;
  margin: 0;
  font-family: 'Roboto';

  @media screen and (max-width:859px){
    font-size: 15px;
    transition: ease all .5s;
  }
`;

const Title = styled.h1`
  font-family: 'Outfit';
  font-size: 80px;
  margin: 0;
  resize: none;

  @media screen and (max-width:859px){
    font-size: 50px;
    transition: ease all .5s;
  }
`;

const Button = styled.a`
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: #D9D9D9;
  padding: 16px 32px;
  border-radius: 104px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  width: 336px;
  height: 76px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #4F3E6E;
  text-align: center;
  line-height: 75px;

  &:hover{
    opacity: 0.7;
  }

  @media screen and (max-width:859px){
    width: 150px;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    transition: ease all .5s;
  }
`;

const Social = styled.span `
  a {
    padding: 15px 10px;
    width: 50px;
    height: 50px;
    left: 195px;
    top: 591px;

    &:hover {
      opacity: 0.7;
    }
  }

  img {
    @media screen and (max-width:859px){
      transition: ease all .5s;
      width: 35px;
      height: 35px;
  }
`;


function Heading() {
  return (
    <Container>
      <Time>April 15-16 2023</Time>
      <Title>2023 WildHacks registration is now open!</Title>
      <div><Button href="#">REGISTER NOW!</Button></div>
      <Social>
        <a href="https://www.instagram.com/nuwildhacks/?hl=en" target="_blank">
            <img src="public/instagram.png" alt="Instagram" />
        </a>
        <a href="https://www.facebook.com/nuwildhacks/" target="_blank">
            <img src="public/facebook.png" alt="Facebook" />
        </a>
      </Social>
    </Container>
  );
}

export default Heading;
