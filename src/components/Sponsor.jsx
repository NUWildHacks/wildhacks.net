import styled from 'styled-components';
import { mobile } from '../styles';

const Container = styled.a`
  display: block;

  img {
    height: ${(props) => props.h || 64}px;
    transition: transform 0.2s ease-in-out;
    ${mobile} {
      max-width: 100%;
      height: auto;
      height: ${(props) => props.h || 64}px;
    }
  }

  &:hover img {
    transform: scale(1.02);
  }
`;

export default function Sponsor({ href, src, alt, h }) {
  return (
    <Container href={href} target="_blank" rel="noreferrer" h={h}>
      <img src={src} alt={alt} />
    </Container>
  );
}
