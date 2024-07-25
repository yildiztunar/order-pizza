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
width: 50%;
`
const OrderTotal = styled.div`
border:#FFFFFF solid 0.05rem;
border-radius: 0.5rem;
width:25%;
margin: 1rem;
`
const OrderTexts = styled.div`
padding:3rem 3rem;
`
const SelectionsWrapper = styled.p`
display:flex;
justify-content:space-between;
`
const Selections = styled.p`
padding-top:1rem;
text-align:left;
color: #FFFFFF;
font-size: 1.5rem;
`
const SelectionsEuro = styled.p`
padding-top:1rem;
text-align:left;
color:#FFFFFF;
font-size: 1.5rem;
`
const TotalWrapper = styled.p`
display:flex;
justify-content:space-between;
font-size: 1.5rem;
`
const Total = styled.p`
text-align:left;
color:#FFFFFF;
font-size: 1.5rem;
`
const TotalEuro = styled.p`
text-align:left;
color:#FFFFFF;
font-size: 1.5rem;
`
const Titles = styled.p`
text-align:left;
color: #FFFFFF;
font-size: 1.5rem;
`

const SelectedPizza = styled.p`
text-align:left;
color: #FFFFFF;
font-size: 1.5rem;
`
const SelectedAddtWrapper=styled.p`
display: flex;
flex-direction:column;
gap:0.5rem;
width:15%;
`

const SelectedAddt = styled.p`
text-align:left;
color: #FFFFFF;
font-size: 1rem;
font-weight:lighter;
`



export default function Success(props) {
  const { size, dough, addtIngredients, addtIngredientsTotal, unit } = props;

  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <TitleFirst>Technological Meals</TitleFirst>
        <TitleSecond><Ontheway>flavor on the way</Ontheway>ORDER RECEIVED</TitleSecond>
        <Separator> </Separator>

      <SelectedPizza>Position Absolute Spicy Pizza</SelectedPizza>
      <SelectedAddtWrapper>
          <SelectedAddt>Size: {size}</SelectedAddt>
          <SelectedAddt>Dough: {dough}</SelectedAddt>
          <SelectedAddt>Additional Ingredients: {addtIngredients.join(", ")}</SelectedAddt>
        </SelectedAddtWrapper>

      <OrderTotal>
      <OrderTexts>
            <Titles>Order Total</Titles>
            <SelectionsWrapper><Selections>Selections:</Selections><SelectionsEuro>{addtIngredientsTotal * unit} Euro</SelectionsEuro></SelectionsWrapper>
            <TotalWrapper><Total>Total:</Total><TotalEuro>{(15.50 + addtIngredientsTotal) * unit} Euro</TotalEuro></TotalWrapper>
          </OrderTexts>
      </OrderTotal>

      </PageWrapper>
    </>
  );
}