import styled from 'styled-components';

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;

  h1 {
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 700;
    font-size: 57px;
    line-height: 68px;
    text-align: center;
    padding-top: 50px;

    @media screen and (max-width:859px){
        font-size: 40px;
        transition: ease all .5s;
    }
  }
`;

const Questions = styled.div`
    max-width: 885px;
    min-height: 399px;
    background: #D9D9D9;
    border-radius: 45px;
    margin: auto;
`;

function Faq() {
  return (
    <Container id="faq">
        <h1>FAQ</h1>
        <Questions>

        </Questions>
    </Container>
  );
}

export default Faq;