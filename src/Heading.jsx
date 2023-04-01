import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { mobile } from './styles';

const Container = styled.div`
  padding: 32px;
  font-family: Roboto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const Time = styled.p`
  font-size: 24px;
  font-weight: bold;
  opacity: 0.75;
  margin: 0;

  ${mobile} {
    font-size: 16px;
  }
`;

const Title = styled.h1`
  font-family: 'Roboto';
  font-weight: 900;
  font-size: 96px;
  margin: 0;
  letter-spacing: 8px;
  text-shadow: 0 0 16px #ffffff;

  ${mobile} {
    font-size: 40px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 32px 0;
  gap: 12px;
`;

const Button = styled.a`
  padding: ${({ icon }) => (icon ? '10px' : '16px')};
  border-radius: 16px;
  color: #ffffff;
  border: 2px solid white;
  text-decoration: none;
  transition: all 200ms;
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    ${({ icon }) =>
      icon ? 'width: 32px; height: 32px;' : 'width: 20px; height: 20px;'}
    transition: transform 200ms;
  }

  p {
    margin: 0;
  }

  &:hover {
    color: #010922;
    background-color: #ffffff;

    svg {
      ${({ moveArrow }) => moveArrow && 'transform: translateX(4px);'}
    }
  }

  &:active {
    transform: scale(0.95);
  }

  ${({ disabled }) => disabled && 'opacity: 0.5; pointer-events: none;'}
`;

function Heading() {
  return (
    <Container>
      <Time>April 15-16 2023 in Evanston, IL</Time>
      <Title>WILDHACKS 2023</Title>
      <ButtonContainer>
        <Button href="https://dashboard.wildhacks.net">
          <p>DASHBOARD</p>
        </Button>
        <Button
          icon
          href="https://www.instagram.com/wildhacks/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </Button>
        <Button
          icon
          href="https://www.facebook.com/WildHacksNU"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </Button>
      </ButtonContainer>
    </Container>
  );
}

export default Heading;
