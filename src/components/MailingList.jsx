import styled from 'styled-components';
import { mobile } from '../styles';

const Container = styled.div`
  position: fixed;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 1200px;
  width: 100vw;
  padding: 0 16px;
  box-sizing: border-box;
`;

const Form = styled.form`
  background-color: #382e7d;
  padding: 8px;
  border-radius: 6px;
  box-shadow: 0 0 16px #382e7d;
  display: flex;
  gap: 32px;
  justify-content: center;
  align-items: center;

  ${mobile} {
    flex-direction: column;
    gap: 8px;
  }
`;

const Text = styled.p`
  margin: 0;
  font-size: 14px;
  text-align: center;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Input = styled.input`
  background-color: #01002e;
  border: 1px solid #646464;
  color: #ffffff;
  border-radius: 8px;
  padding: 4px 8px;
  outline: none;
  width: ${(props) => props.w}px;

  &:hover {
    border-color: #a0a0a0;
  }

  &:focus {
    border-color: #559fd5;
  }
`;

const Button = styled.button`
  background-color: #559fd5;
  color: #ffffff;
  border: none;
  padding: 4px 16px;
  border-radius: 6px;
  transition: opacity 150ms;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.7;
  }
`;

export default function MailingList() {
  return (
    <Container>
      <Form>
        <Text>Interested? Join our mailing list!</Text>
        <InputContainer>
          <Input autoComplete="off" placeholder="First Name" w={80} />
          <Input autoComplete="off" placeholder="Last Name" w={80} />
          <Input autoComplete="off" placeholder="Email" w={160} />
        </InputContainer>
        <Button>Join</Button>
      </Form>
    </Container>
  );
}
