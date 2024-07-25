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
  justify-content: center;
  gap: 1rem;
  height: 100vh;
`;

const SectionFirst = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const TitleFirst = styled.div`
  font-size: 2rem;
  color: white;
  text-align: center;
  display:flex;
  flex: 1;
  padding-top:4rem;
  font-family: "Barlow", sans-serif;
  font-weight:bold;
`;

const Ontheway = styled.div`
color: #FDC913;
font-size: 2rem;
font-family: "Satisfy", cursive;
`
const TitleSecond = styled.div`
  font-size: 5rem;
  color: white;
  text-align: center;
  display:flex;
  flex-direction:column;
  align-items:center;
  font-family: "Roboto Condensed", sans-serif;
`
const Separator = styled.div`
border-bottom: white solid 0.05rem;
margin: 0 ;
width: 70%;
`
const OrderTotal = styled.div`
border:#FFFFFF solid 0.05rem;
border-radius: 0.5rem;
margin: 1rem;
padding:1rem 2rem;
`

const TitleThird = styled.p`
text-align:left;
color:#FFFFFF;
font-size: 1.2rem;
`
const TotalWrapper = styled.p`
display:flex;
justify-content:space-between;
align-items: center;
`
const TotalEuro = styled.p`
text-align:left;
color:#FFFFFF;
font-size: 1.2rem;
padding-left: 6rem;
`
const Titles = styled.p`
text-align:left;
color: #FFFFFF;
font-size: 1.5rem;
padding: 1rem 0;
`
const SelectedPizza = styled.p`
text-align:left;
color: #FFFFFF;
font-size: 1.5rem;
`
const SelectedAddtWrapper=styled.p`
display: flex;
flex-direction:row;
gap:0.5rem;
width:70%;
justify-content: center;
color: #FFFFFF;
font-weight:lighter;
`

const SelectedAddt = styled.p`
font-weight:bold;
`


export default function Success(props) {
  const { size, dough, addtIngredients, addtIngredientsTotal, unit } = props;

  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <SectionFirst>
        <TitleFirst>Technological Meals</TitleFirst>
        <TitleSecond><Ontheway>flavor on the way</Ontheway>ORDER RECEIVED</TitleSecond>
        </SectionFirst>
        <Separator> </Separator>
        <SectionFirst>
      <SelectedPizza>Position Absolute Spicy Pizza</SelectedPizza>
      <SelectedAddtWrapper>
          <SelectedAddt>Size: </SelectedAddt>{size}
          <SelectedAddt>Dough: </SelectedAddt>{dough}
          <SelectedAddt>Additional Ingredients: </SelectedAddt>{addtIngredients.join(", ")}
        </SelectedAddtWrapper>
        </SectionFirst>
      <OrderTotal>
            <Titles>Order Total</Titles>
            <TotalWrapper><TitleThird>Selections: </TitleThird><TotalEuro>{addtIngredientsTotal * unit} Euro</TotalEuro></TotalWrapper>
            <TotalWrapper><TitleThird>Total: </TitleThird><TotalEuro>{(15.50 + addtIngredientsTotal) * unit} Euro</TotalEuro></TotalWrapper>
      </OrderTotal>

      </PageWrapper>
    </>
  );
}