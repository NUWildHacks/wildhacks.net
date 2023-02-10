import styled from 'styled-components';
import { mobile } from '../styles';

const Container = styled.section`
  padding: 96px 0;
  font-size: 20px;

  ${mobile} {
    padding: 64px 16px;
    font-size: 16px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.h2`
  text-align: center;
  margin: 0;
  font-size: 36px;
  color: #b8a9f1;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 4px;
    background-color: #7b67c3;
    margin: 0;
    border-radius: 2px;
  }

  ${mobile} {
    font-size: 28px;
  }
`;

export default function Section({ title, id, children }) {
  return (
    <Container id={id}>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      {children}
    </Container>
  );
}
