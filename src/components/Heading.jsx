import styled from 'styled-components';

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 64px 32px;
`;

const Time = styled.p`
  font-size: 24px;
  font-weight: bold;
  opacity: 0.75;
  margin: 0;
`;

const Title = styled.h1`
  font-size: 64px;
  margin: 0;
`;

const Button = styled.a`
  display: block;
  background-color: red;
  padding: 16px 32px;
  border-radius: 16px;
`;

function Heading() {
  return (
    <Container>
      <Time>April 15-16 2023</Time>
      <Title>2023 WildHacks registration is now open!</Title>
      <Button href="#">Register</Button>
    </Container>
  );
}

export default Heading;
