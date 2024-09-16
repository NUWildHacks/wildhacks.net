import { useEffect, useState, useRef } from 'react';
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
  transition: transform 2s ease-in-out;

  ${({ success }) => {
    if (success === 'hidden')
      return `transform: translateX(-50%) translateY(100%);`;
  }};
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

  .hide {
    display: ${({ success }) => {
      if (success === 'true') return `none`;
    }};

    ${({ success }) => {
      if (success === 'hidden') return `visibility: hidden`;
    }};
  }

  .success {
    display: ${({ success }) => {
      if ((success !== 'true') & (success !== 'hidden')) return `none`;
    }};

    ${({ success }) => {
      if (success === 'hidden')
        return `
        opacity: 0;
      `;
    }};
  }

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

  ${mobile} {
    flex-direction: column;
  }
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

  ${mobile} {
    width: 160px;
  }
`;

const Button = styled.button`
  background-color: #a599ff;
  color: #ffffff;
  border: 1px solid #8b74bd;
  padding: 4px 16px;
  border-radius: 6px;
  transition: opacity 150ms;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  &:active {
    opacity: 0.7;
  }

  &:disabled {
    background-color: #d3d3d3;
    color: #a8a8a8;
    border-color: #c0c0c0;
    cursor: not-allowed;
  }
`;

export default function MailingList() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const api = 'https://api.dilanxd.com/wildhacks/subscribe';
  const form = useRef();
  const messages = {
    true: 'You have been successfully added to our mailing list',
    false: 'Subscription failed: Please enter valid inputs',
    error: 'Subscription error: Please try again',
  };

  const subscriberData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
  };

  const subscribe = (e) => {
    e.preventDefault();
    setLoading(true);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(subscriberData),
    };

    fetch(api, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setSuccess(data.success);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setSuccess('error');
        setLoading(false);
      });
  };

  useEffect(() => {
    console.log('useEffect triggered. Success:', success);
    let timeout;

    if (success.toString() === 'true') {
      timeout = setTimeout(() => {
        setSuccess('hidden');
      }, 2_000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [success]);

  return (
    <Container success={success.toString()}>
      <Form ref={form} onSubmit={subscribe} success={success.toString()}>
        <Text className="hide">
          {success === 'false' || success === 'error'
            ? messages[success.toString()]
            : 'Interested? Join our mailing list!'}
        </Text>
        <p className="success">{messages.true}</p>
        <InputContainer className="hide">
          <Input
            autoComplete="off"
            placeholder="First Name"
            w={80}
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            required
          />
          <Input
            autoComplete="off"
            placeholder="Last Name"
            w={80}
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            required
          />
          <Input
            autoComplete="off"
            placeholder="Email"
            w={160}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </InputContainer>
        <Button className="hide" type="submit" value="Send" disabled={loading}>
          Join
        </Button>
      </Form>
    </Container>
  );
}
