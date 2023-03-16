import Heading from './Heading';
import Navigation from './components/Navigation';
import About from './About';
import Faq from './Faq';
import Footer from './Footer';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 16px;
`;

function App() {
  return (
    <Container>
      <Navigation />
      <Heading />
      <About />
      <Faq />
      <Footer />
    </Container>
  );
}

export default App;
