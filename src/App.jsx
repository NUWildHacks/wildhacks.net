import Heading from './Heading';
import Navigation from './components/Navigation';
import About from './About';
import Faq from './Faq';
import Footer from './Footer';
import Subscribe from './Subscribe';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 16px;
`;

function App() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 3_000);
  }, []);

  return (
    <Container>
      {show && <Subscribe show={show} setShow={setShow} />}
      <Navigation />
      <Heading />
      <About />
      <Faq />
      <Footer />
    </Container>
  );
}

export default App;
