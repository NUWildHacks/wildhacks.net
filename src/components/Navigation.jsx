import styled from 'styled-components';
import { mobile } from '../styles';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 96px;
  overflow: visible;
`;

const Logo = styled.img`
  display: block;
  align-items: center;
  padding: 16px 0;
  width: 64px;
  margin: 0 32px;
`;

const Badge = styled.a`
  display: block;
  width: 80px;

  img {
    position: absolute;
    top: 0;
    width: 80px;
  }

  ${mobile} {
    width: 64px;
    img {
      width: 64px;
    }
  }
`;

function Navigation() {
  return (
    <Nav>
      <Logo src="wildhacks-no-bg.png" alt="WildHacks Logo" />
      <Badge
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=white"
        target="_blank"
      >
        <img
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-white.svg"
          alt="Major League Hacking 2023 Hackathon Season"
        />
      </Badge>
    </Nav>
  );
}

export default Navigation;
