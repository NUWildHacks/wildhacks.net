import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Modal = styled.div`
  position: fixed;
  top: 25%;
  left: 20%;
  z-index: 1000;
  background-color: white;
  color: #010922;
  min-width: 700px;
  max-width: 800px;
  min-height: 400px;
  margin: 0 auto;
  padding: 0 16px;
`;

const Content = styled.div`
  min-width: 70%;
  display: flex;
  flex-direction: column;
  float: right;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Group = styled.span`
  display: flex;
  align-items: center;
  border-radius: 25px;
  border: 2px solid #010922;
  padding: 5px;
  font-size: 10px;
  margin: 5px;
`;

const SpanContainer = styled.span`
  display: flex;
  justify-content: space-between;

`;

const Input = styled.input`
  flex-grow: 1;
  background-color: #ffffff;
  border: 2px solid white;
`;

const Button = styled.button`
  width: 35%;
  height: 40px;
  border-radius: 20px;
  text-transform: uppercase;
`;

function Subscribe({ show, setShow }) {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [school, setSchool] = useState('');
  const [email, setEmail] = useState('');

  return (
    <Modal>
      <FontAwesomeIcon
        icon={faTimes}
        onClick={() => setShow(false)}
        style={{
          display: 'flex',
          float: 'right',
          padding: '5px',
          fontSize: '20px',
        }}
      />
      <Content>
        <h1>Subscribe</h1>
        <p>Subscribe to our newsletter and stay updated!</p>
        <Info>
          <SpanContainer style={{ display: 'flex' }}>
            <Group>
              <p>First Name:</p>
              <Input
                type="text"
                value={first}
                onChange={(e) => setFirst(e.target.value)}
              ></Input>
            </Group>
            <Group>
              <p>Last Name:</p>
              <Input
                type="text"
                value={last}
                onChange={(e) => setLast(e.target.value)}
              ></Input>
            </Group>
          </SpanContainer>
          <Group>
            <p>University:</p>
            <Input
              type="text"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
            ></Input>
          </Group>
          <Group>
            <p>Email:</p>
            <Input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Input>
          </Group>
        </Info>
        <Button>Subscribe</Button>
      </Content>
    </Modal>
  );
}

export default Subscribe;
