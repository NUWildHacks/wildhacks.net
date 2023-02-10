import styled from 'styled-components';
import { mobile } from '../styles';

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: rgba(253, 186, 116, 0.5);
  padding: 8px 16px;
  border-radius: 12px;
  margin: 16px 0;

  svg {
    width: 24px;
    height: 24px;
    ${mobile} {
      display: none;
    }
  }
`;

const Text = styled.p`
  margin: 0;
  font-size: 16px;

  ${mobile} {
    font-size: 14px;
  }
`;

export default function Admonition({ icon, children }) {
  return (
    <Container>
      {icon}
      <Text>{children}</Text>
    </Container>
  );
}
