import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  max-width: 1000px;
`;

const Title = styled.p`
  font-size: 24px;
`;

function Sponsors() {
  return (
    <Container>
      <Title>SPONSORED BY</Title>
    </Container>
  );
}

export default Sponsors;
