import styled from 'styled-components';
import Question from './components/Question';
import Section from './components/Section';

const Category = styled.div`
  margin: 48px 0;
`;

const CategoryTitle = styled.h3`
  margin: 16px 0;
  font-weight: 900;
  font-size: 16px;
  letter-spacing: 3px;
  opacity: 0.75;
`;

function Faq() {
  return (
    <Section title="FAQ" id="faq">
      <Category>
        <CategoryTitle>GENERAL</CategoryTitle>
        <Question q="What is WildHacks?">
          WildHacks is a <span>weekend-long event</span> where students work
          together to create cool software projects! You can expect{' '}
          <span>workshops</span>,
          <span>free food from Evanston restaurants</span>,{' '}
          <span>fun social and de-stress events</span>, <span>free swag</span>,
          and more!
        </Question>
        <Question q="What if I've never coded before?">
          WildHacks is open to students of <span>all experience levels</span>!
          We'll send out resources with beginner-friendly tutorials and will
          have a Discord server on which you can ask questions.
        </Question>
        <Question q="Is this hackathon purely coding-based?">
          The hackathon will be <span>software-focused</span>, but don't worry
          if you don't have prior coding experience. We'll send out resources
          and have workshops to help you learn how to code.
        </Question>
        <Question q="Where can I find an event-based schedule for the entirety of this hackathon?">
          The full schedule will be released closer to the event, but check-in
          will begin at <span>11:00 AM on Saturday, April 15, 2023</span>, and
          the closing ceremony will end at{' '}
          <span>5:00 PM on Sunday, April 16, 2023</span>.
        </Question>
        <Question q="What will I submit?">
          At the end of the hackathon, you'll submit your{' '}
          <span>project's source code</span>, a{' '}
          <span>2-minute video pitch</span>, and any other relevant resources to
          the WildHacks Dashboard. A more detailed rubric will be released
          during kickoff.
        </Question>
      </Category>
      <Category>
        <CategoryTitle>REGISTRATION / TEAMS</CategoryTitle>
        <Question q="Who is eligible to participate?">
          All <span>university students</span> are eligible to participate in
          WildHacks! High school students are unfortunately not eligible to
          participate in WildHacks.
        </Question>
        <Question q="How will teams work?">
          Teams can consist of up to <span>4 members</span>! We strongly
          encourage you to work with others!
        </Question>
        <Question q="Are you required to have a team to register?">
          <span>No, you are not required to register with a team</span>. At the
          start of the event, if you don't already have a team in mind, you can
          choose find a team to join or be randomly assigned to one. There will
          be time during the event to find team members, but you can also find
          members on the Discord server.
        </Question>
      </Category>
      <Category>
        <CategoryTitle>LOGISTICS</CategoryTitle>
        <Question q="Where will WildHacks take place?">
          WildHacks will take place primarily in Northwestern University's{' '}
          <span>Seeley G. Mudd Library</span>. The building will be open
          overnight. More details about the logistics of check-in will be
          released closer to the event.
        </Question>
        <Question q="Will there be sleeping / showering accommodations? (TBA)">
          TBA.
        </Question>
        <Question q="Will transportation be reimbursed?">
          Transportation will not be reimbursed.
        </Question>
        <Question q="Do we have to stay for the full 36 hours? (TBA)">
          No, you are free to leave the event before the hackathon ends! TBA.
        </Question>
        <Question q="What are the tentative COVID protocols? (TBA)">
          TBA.
        </Question>
      </Category>
      <Category>
        <CategoryTitle>SUPPORT</CategoryTitle>
        <Question q="How can I get in touch?">
          Send us an email at <span>wildhacks@northwestern.edu</span>! We'd be
          happy to answer any questions about the event or steps to get
          involved.
        </Question>
        <Question q="I'm interested in sponsoring WildHacks. Who should I contact?">
          Send us an email at <span>wildhacks@northwestern.edu</span>! We'd be
          happy to talk.
        </Question>
      </Category>
    </Section>
  );
}

export default Faq;
