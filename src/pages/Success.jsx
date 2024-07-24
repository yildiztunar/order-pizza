import styled, { createGlobalStyle } from 'styled-components';

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
`
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  min-height: 100vh; 
  width: 100%;
`

const TitleFirst = styled.div`
  font-size: 2rem;
  color: white;
  text-align: center;
  display:flex;
  flex: 1;
  padding-top:4.8rem;
  padding-bottom: 2rem;
  font-family: "Barlow", sans-serif;
  font-weight:bold;
`;

const LezzetinYolda = styled.div`
color: #FDC913;
font-size: 2rem;
font-family: "Satisfy", cursive;
`
const TitleSecond = styled.div`
  font-size: 6rem;
  color: white;
  text-align: center;
  display:flex;
  flex-direction:column;
  align-items:center;
  font-family: "Roboto Condensed", sans-serif;
`
const Ayrac = styled.div`
border-bottom: white solid 0.05rem;
margin: 0 ;
width: 50%;
`
const SiparisToplami = styled.div`
border:#FFFFFF solid 0.05rem;
border-radius: 0.5rem;
width:25%;
`
const SiparisMetinler = styled.div`
padding:3rem 3rem;
`
const SecimlerWrapper = styled.p`
display:flex;
justify-content:space-between;
`
const Secimler = styled.p`
padding-top:1rem;
text-align:left;
color: #FFFFFF;
font-size: 1.5rem;
`
const SecimlerTL = styled.p`
padding-top:1rem;
text-align:left;
color:#FFFFFF;
font-size: 1.5rem;
`
const ToplamWrapper = styled.p`
display:flex;
justify-content:space-between;
font-size: 1.5rem;
`
const Toplam = styled.p`
text-align:left;
color:#FFFFFF;
font-size: 1.5rem;
`
const ToplamTL = styled.p`
text-align:left;
color:#FFFFFF;
font-size: 1.5rem;
`
const Titles = styled.p`
text-align:left;
color: #FFFFFF;
font-size: 1.5rem;
`

const SecilenPizza = styled.p`
text-align:left;
color: #FFFFFF;
font-size: 1.5rem;
`
const SecilenEkMalzemelerWrapper=styled.p`
display: flex;
flex-direction:column;
gap:0.5rem;
width:15%;
`

const SecilenEkMalzemeler = styled.p`
text-align:left;
color: #FFFFFF;
font-size: 1rem;
font-weight:lighter;
`



export default function Success(props) {
  const { size, dough, addtIngredients, addtIngredientsTotal, adet } = props;

  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <TitleFirst>Technological Meals</TitleFirst>
        <TitleSecond><LezzetinYolda>flavor on the way</LezzetinYolda>ORDER RECEIVED</TitleSecond>
        <Ayrac> </Ayrac>

      <SecilenPizza>Position Absolute Spicy Pizza</SecilenPizza>
      <SecilenEkMalzemelerWrapper>
          <SecilenEkMalzemeler>Size: {size}</SecilenEkMalzemeler>
          <SecilenEkMalzemeler>Dough: {dough}</SecilenEkMalzemeler>
          <SecilenEkMalzemeler>Additional Ingredients: {addtIngredients.join(", ")}</SecilenEkMalzemeler>
        </SecilenEkMalzemelerWrapper>

      <SiparisToplami>
      <SiparisMetinler>
            <Titles>Order Total</Titles>
            <SecimlerWrapper><Secimler>Selections</Secimler><SecimlerTL>{addtIngredientsTotal * adet} TL</SecimlerTL></SecimlerWrapper>
            <ToplamWrapper><Toplam>Total</Toplam><ToplamTL>{(85.50 + addtIngredientsTotal) * adet} TL</ToplamTL></ToplamWrapper>
          </SiparisMetinler>
      </SiparisToplami>

      </PageWrapper>
    </>
  );
}