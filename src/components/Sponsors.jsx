import styled from 'styled-components';
import Logo from './Logo';

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Title = styled.h3`
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  text-transform: uppercase;
`;

const Sponsor = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  white-space: nowrap;
  max-width: 1065px;
  min-height: 114px;
  background: rgba(58, 48, 127, 0.5);
  border-radius: 12px;
  margin: 0;
`;

function Sponsors() {
  return (
    <Container id="sponsors">
      <Title>SPONSORED BY</Title>
      <Sponsor>
        <Logo href="https://techcrunch.com/" url="public/techcrunch.png" alt="TedCrunch"></Logo>
        <Logo href="https://www.fastcompany.com/" url="public/fastcompany.png" alt="FastCompany"></Logo>
        <Logo href="https://mit.edu/" url="public/mit.png" alt="MIT"></Logo>
        <Logo href="https://forbes.com/" url="public/forbes.png" alt="Forbes"></Logo>
      </Sponsor>
    </Container>
  );
}

export default Sponsors;
