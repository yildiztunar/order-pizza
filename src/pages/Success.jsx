import styled, { createGlobalStyle } from 'styled-components';
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
`;

const TitleFirst = styled.div`
  font-size: 2rem;
  color: white;
  text-align: center;
  display:flex;
  flex: 1;
  padding-top:4.8rem;
`;

const TitleSecond = styled.div`
  font-size: 4rem;
  color: white;
  text-align: center;
  display:flex;
  flex: 2; 
`;


export default function Success() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <TitleFirst>Teknolojik Yemekler</TitleFirst>
        <TitleSecond>TEBRIKLER!<br />SIPARISINIZ ALINDI!</TitleSecond>
        
      </PageWrapper>
    </>
  );
}