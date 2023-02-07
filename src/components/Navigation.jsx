import styled from 'styled-components';

const Container = styled.header`
`;

const Nav = styled.nav`
  display: flex;
  width: 100%;
  justify-content:space-between;
  align-items: center;
  top: 0px;
`;

const Logo = styled.img`
  width: 90px;
  height: 90px;
  margin-left: 60px;
  padding: 0px;
  align-items: center;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  margin-right: 150px;

  li {
    margin: 0 20px;
  }

  a {
    font-family: 'Outfit';
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-size: 20px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Badge = styled.a`
  display: block;
  max-width: 100px;
  min-width: 60px;
  position: fixed;
  right: 50px;
  top: 0;
  width: 10%;
  z-index: 10000;

  img {
    width: 100%;
  }
`;

function Navigation() {
    return (
        <Container id="home">
          <Nav>
            <Logo src="public/wildhacks.png" alt="WildHacks' Logo" />
            <List>
              <li><a href="#home">home</a></li>
              <li><a href="#about">about</a></li>
              <li><a href="#tracks">tracks</a></li>
              <li><a href="#sponsors">sponsors</a></li>
              <li><a href="#faq">FAQ</a></li>
            </List>
          </Nav>
          <Badge href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=white" target="_blank"><img src="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-white.svg" alt="Major League Hacking 2023 Hackathon Season"/></Badge>
        </Container>
    );
}

export default Navigation;