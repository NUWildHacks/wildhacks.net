import styled from 'styled-components';

const Container = styled.div`
    margin: 0 auto;

  h1 {
    text-align: center;
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 700;
    font-size: 57px;
    line-height: 68px;
    padding-top: 50px;
  }

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 28px;
    width: 60%;
    margin-left: 20%;
    text-align: center;
  }
`;

function About() {
  return (
    <Container id="about">
        <h1>About Us</h1>
        <p>WildHacks is Northwestern’s overnight Hackathon taking place in-person April 15-16 2023. 
        As Northwestern’s largest hackathon, WildHacks is an opportunity for students to learn 
        programming skills and develop a final project in a collaborative and inclusive environment. 
        Through workshops, mentorship, and prizes, WildHacks aims to be an inclusive event that welcomes 
        students of all skill levels, majors, and backgrounds</p>
    </Container>
  );
}

export default About;