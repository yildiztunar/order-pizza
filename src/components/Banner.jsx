import styled, { createGlobalStyle } from 'styled-components';
import BannerImage from '../assets/home-banner.png';
import { Link } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
    margin: auto;
    padding: 0;
    width: 100%;

  }
    body {
    background-image: url(${BannerImage});
    background-size: cover;
    background-position: center;
    font-family: "Barlow", sans-serif;
    }
`;
const BannerWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 2rem;
min-height: 100vh; 
width: 100%;
justify-content:flex-start;
padding-top: 4rem;
h1{
color: white;
font-size:3em;
}
h2{
font-size: 4rem;
color: white;
text-align: center;
font-family: "Roboto Condensed", sans-serif;
font-weight:lighter;
}
@media (max-width: 480px) {
h1{
font-size:2em;
}
h2{
font-size: 2rem;
}
}
`;
const Button = styled(Link)`
color:black;
background-color: #FDC913;
padding: 0.5rem 1rem;
border-radius: 2rem;
width: 10rem;
height:2.5rem;
text-align: center; 
cursor: pointer;
font-weight: bold;
&:hover {
    background-color: white;
    color:black;
  }
`;
const Subtitle = styled.div`
color: #FDC913;
font-size: 2rem;
font-family: "Satisfy", cursive;
`;
export default function Banner() {
  return (
    <>
      <GlobalStyle />
      <BannerWrapper>
        <h1>Technological Meals</h1>
        <Subtitle>don't miss the opportunity</Subtitle>
        <h2>CODE IS UNAPPETIZING,  <br />PIZZA IS SATISFYING</h2>
        <Button data-cy="orderPizza" to="/OrderPizza">I'M HUNGRY!</Button>
      </BannerWrapper>
    </>
  );
}