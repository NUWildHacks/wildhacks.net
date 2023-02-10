import styled from 'styled-components';
import { mobile } from '../styles';

const Container = styled.a`
  display: block;

  img {
    height: 64px;
    transition: transform 0.2s ease-in-out;
    ${mobile} {
      max-width: 100%;
      height: auto;
    }
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

export default function Sponsor({ href, src, alt }) {
  return (
    <Container href={href} target="_blank" rel="noreferrer">
      <img src={src} alt={alt} />
    </Container>
  );
}
