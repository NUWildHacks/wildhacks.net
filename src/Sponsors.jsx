import styled from 'styled-components';
import Sponsor from './components/Sponsor';

const Container = styled.div`
  padding: 16px 0;
`;

const Title = styled.h3`
  text-align: center;
  font-size: 16px;
  color: #b8a9f1;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
  background-color: #ffffff;
  box-shadow: 0 0 16px #ffffff;
  padding: 16px;
  border-radius: 12px;
`;

function Sponsors() {
  return (
    <Container>
      <Title>— OUR SPONSORS —</Title>
      <Content>
        <Sponsor src="/imc.png" alt="IMC" href="https://www.imc.com/us/" />
        <Sponsor
          src="/northwestern-cs.png"
          alt="Northwestern Computer Science"
          href="https://www.mccormick.northwestern.edu/computer-science/"
        />
        <Sponsor
          src="/deloitte.png"
          alt="Deloitte"
          href="https://www2.deloitte.com/us/en.html"
        />
        <Sponsor
          src="/spiderrock.png"
          alt="SpiderRock"
          href="https://www.spiderrock.net/"
        />
        <Sponsor src="/poatek.png" alt="POATEK" href="https://poatek.com/" />
        <Sponsor
          src="/thegarage.jpeg"
          alt="The Garage"
          href="https://thegarage.northwestern.edu/"
          h={128}
        />
      </Content>
    </Container>
  );
}

export default Sponsors;
