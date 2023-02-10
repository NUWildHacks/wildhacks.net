import styled from 'styled-components';
import Section from './components/Section';
import Sponsors from './Sponsors';

const Title = styled.h2`
  font-size: 32px;
  margin: 0;
`;

const Text = styled.p`
  text-align: center;
  span {
    font-weight: 900;
  }
`;

function About() {
  return (
    <Section title="ABOUT" id="about">
      <Text>
        WildHacks is Northwestern's{' '}
        <span>overnight Hackathon taking place in-person April 15-16 2023</span>
        . As Northwestern's largest hackathon, WildHacks is an opportunity for
        students to learn programming skills and develop a final project in a
        collaborative and inclusive environment. Through workshops, mentorship,
        and prizes, WildHacks aims to be an inclusive event that welcomes
        students of all skill levels, majors, and backgrounds.
      </Text>
      <Sponsors />
    </Section>
  );
}

export default About;
