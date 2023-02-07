import styled from 'styled-components';

const Container = styled.footer`
    text-align: center;
    padding-top: 50px;
    font-family: 'Roboto';
    font-style: normal;

    h3 {
        margin-bottom: 0;
        padding-bottom: 10px;

        @media screen and (max-width:859px){
            font-size: 15px;
            transition: ease all .5s;
        }
    }

    a {
        text-decoration: none;
        color: white;
        &:hover {
            text-decoration: underline;
        }
    }
`;

function Footer() {
  return (
    <Container>
        <h3 id="p">Any other questions?</h3>
        <h3 id="p">Email us at 
            <a href = "mailto: wildhacks@northwestern.edu" target="_blank"> wildhacks@northwestern.edu</a>
        </h3>
    </Container>
  );
}

export default Footer;