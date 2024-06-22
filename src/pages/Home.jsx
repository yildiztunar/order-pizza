import styled, { createGlobalStyle } from 'styled-components';
import BannerImage from '../../Interfaces/Iteration-1/banner.png';

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
    background-color: #CE2829;
  }
`;

const PageWrapper = styled.div`
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
`;

const TitleSecond = styled.div`
  font-size: 4rem;
  color: white;
  text-align: center;
`;

const Button = styled.div`
  background-color: #FDC913;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  width: 10%;
  text-align: center; 
  cursor: pointer;
`;

const Banner = styled.div`
  background-image: url(${BannerImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 500px; 
`;

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <TitleFirst>Teknolojik Yemekler</TitleFirst>
        <TitleSecond>KOD ACIKTIRIR <br />PIZZA, DOYURUR</TitleSecond>
        <Button>ACIKTIM</Button>
        <Banner />
      </PageWrapper>
    </>
  );
}