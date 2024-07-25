import styled, { createGlobalStyle } from 'styled-components';
import BannerImage from '../assets/home-banner.png';
import OzelLezzetus from "../assets/cta/kart-1.png";
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
padding-top: 8rem;
`;

const H1 = styled.h1`
  font-size: 2rem;
  color: white;
  font-family: "Barlow", sans-serif;
  font-weight: bold
`;

const H2 = styled.h2`
font-size: 4rem;
color: white;
text-align: center;
font-family: "Roboto Condensed", sans-serif;
font-weight:lighter;
`;

const Button = styled(Link)`
color:black;
background-color: #FDC913;
padding: 0.5rem 1rem;
border-radius: 2rem;
width: 20%;
text-align: center; 
cursor: pointer;
`;

const Options = styled.div`
display:flex;
flex-wrap: wrap;
gap: 5rem;
justify-content:center;
padding: 2rem 0;
`

const Option = styled.div`
display:flex;
text-align:center;
gap:1rem;
align-items:center;
`

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <BannerWrapper>
        <H1>Technological Meals</H1>
        <H2>CODE IS UNAPPETIZING,  <br />PIZZA IS SATISFYING</H2>
        <Button data-cy="orderPizza" to="/OrderPizza">I'M HUNGRY!"</Button>
        
      </BannerWrapper>
      
      <Options>
        <Option><img src="../assets/icons/1.svg" alt="NEW! Korean"/>NEW! Korean</Option>
        <Option><img src="../assets/icons/2.svg" alt="Pizza"/>Pizza</Option>
        <Option><img src="../assets/icons/3.svg" alt="Burger"/>Burger</Option>
        <Option><img src="../assets/icons/4.svg" alt="Kizartmalar"/>Fried </Option>
        <Option><img src="../assets/icons/5.svg" alt="Fast Food"/>Fast Food</Option>
        <Option><img src="../assets/icons/6.svg" alt="Gazli Icecek"/>Soft Drinks</Option>
      </Options>


    </>
  );
}