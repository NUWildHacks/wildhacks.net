import styled from 'styled-components';

const Sponsor = styled.a`
  transition: all .2s ease-in-out; 
  width: 200px;
  height: auto;
  padding: 30px;

  &:hover {
    transform: scale(1.3); 
  }

  @media screen and (max-width:859px){
    width: 100px;
    height: auto;
    transition: ease all .5s;
  }

  img {
    width: 200px;
    max-height: 55px;
    height: auto;

    @media screen and (max-width:859px){
      width: 100px;
      height: auto;
      transition: ease all .5s;
    }
  }
`;


function Logo(props) {
  return (
    <Sponsor href={props.href} target="_blank">
        <img src={props.url} alt={props.alt} />
    </Sponsor>
  );
}

export default Logo;