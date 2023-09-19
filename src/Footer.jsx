import styled from 'styled-components';
import Section from './components/Section';
import { mobile } from './styles';

const Email = styled.p`
  text-align: center;
  font-weight: 700;
  letter-spacing: 3px;
  font-size: 28px;
  text-shadow: 0 0 8px #ffffff;

  a {
    color: #ffffff;
    text-decoration: none;
    text-underline-offset: 4px;

    &:hover {
      text-decoration: underline;
    }
  }

  ${mobile} {
    font-size: 16px;
  }
`;

const BottomPadding = styled.div`
  height: 64px;
`;

function Footer() {
  return (
    <>
      <Section>
        <Email>
          <a href="mailto:wildhacks@northwestern.edu">
            wildhacks@northwestern.edu
          </a>
        </Email>
      </Section>
      <BottomPadding />
    </>
  );
}

export default Footer;
