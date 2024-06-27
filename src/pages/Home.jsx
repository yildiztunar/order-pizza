import styled, { createGlobalStyle } from 'styled-components';
import BannerImage from '../../Assets/mile1-assets/home-banner.png';
import OzelLezzetus from "../../Assets/mile2-aseets/cta/kart-1.png";
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
justify-content:flex-end;
`;

const TitleFirst = styled.div`
font-size: 2rem;
color: white;
  font-family: "Barlow", sans-serif;
  font-weight:bold;
`;

const TitleSecond = styled.div`
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
width: 10%;
text-align: center; 
cursor: pointer;
`;

const Banner = styled.div`
width: 100%;
height: 500px; 
`;

const Secenekler = styled.div`
display:flex;
gap: 5rem;
justify-content:center;
padding: 2rem 0;
`

const Secenek = styled.div`
display:flex;
text-align:center;
gap:1rem;
align-items:center;
`

const MiddleWrapper = styled.div`
display:flex;
`

const OnerilerFull = styled.div`
display: flex;
gap:1rem;
`
const OnerilerLeft = styled.div`
background-image: url(${OzelLezzetus});
background-size:100%
`
const OnerilerRight = styled.div`
display:flex;
flex-direction: column;
gap:1rem;
`


export default function Home() {
  return (
    <>
      <GlobalStyle />
      <BannerWrapper>
        <TitleFirst>Teknolojik Yemekler</TitleFirst>
        <TitleSecond>KOD ACIKTIRIR <br />PIZZA, DOYURUR</TitleSecond>
        <Button to="/OrderPizza">ACIKTIM</Button>
        <Banner />
      </BannerWrapper>
      
      <Secenekler>
        <Secenek><img src="../../Assets/mile2-aseets/icons/1.svg" alt="YENI! Kore"/>YENI! Kore</Secenek>
        <Secenek><img src="../../Assets/mile2-aseets/icons/2.svg" alt="Pizza"/>Pizza</Secenek>
        <Secenek><img src="../../Assets/mile2-aseets/icons/3.svg" alt="Burger"/>Burger</Secenek>
        <Secenek><img src="../../Assets/mile2-aseets/icons/4.svg" alt="Kizartmalar"/>Kizartmalar</Secenek>
        <Secenek><img src="../../Assets/mile2-aseets/icons/5.svg" alt="Fast Food"/>Fast Food</Secenek>
        <Secenek><img src="../../Assets/mile2-aseets/icons/6.svg" alt="Gazli Icecek"/>Gazli Icecek</Secenek>
      </Secenekler>

      <MiddleWrapper>
      <OnerilerFull>

      <OnerilerLeft>
      
      </OnerilerLeft>

      <OnerilerRight>

      </OnerilerRight>

      </OnerilerFull>



      </MiddleWrapper>


    </>
  );
}