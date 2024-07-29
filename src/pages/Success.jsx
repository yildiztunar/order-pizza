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
    font-family: "Barlow", sans-serif;
  }
`;
const PageWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 3rem;
height: 100vh;
@media (max-width: 480px) {
gap:1rem;
}
`;
const SectionFirst = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 3rem;
h1{
color: white;
font-size:3em;}
h2 {
color:white;}
@media (max-width: 480px) {
h1{
font-size:2em;}
}
`;
const Ontheway = styled.div`
color: #FDC913;
font-size: 2rem;
font-family: "Satisfy", cursive;
`;
const Separator = styled.div`
border-bottom: white solid 0.05rem;
margin: 0 ;
width: 70%;
`;
const OrderTotal = styled.div`
border:#FFFFFF solid 0.05rem;
border-radius: 0.5rem;
margin: 1rem;
padding:1rem 2rem;
text-align:left;
padding: 2rem;
h2 {
color:white;
	font-weight: 500;
  padding: 0 2rem;
}
h3 {
color:white;
	font-weight: 300;
  padding: 0 2rem;
}
@media (max-width: 480px) {
h2{
font-size:2em;}
}
`;
const TotalWrapper = styled.p`
display:flex;
justify-content:space-between;
align-items: center;
`;
const SelectedAddtWrapper=styled.p`
display: flex;
flex-direction:column;
gap:0.5rem;
width:70%;
align-items:flex-start;
color: #FFFFFF;
font-weight:lighter;
text-align:left;
`;

export default function Success(props) {
  const { size, dough, addtIngredients, addtIngredientsTotal, unit } = props;

  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <SectionFirst>
        <h1>Technological Meals</h1>
        <h1><Ontheway>flavor on the way</Ontheway>ORDER RECEIVED</h1>
        </SectionFirst>
        <Separator> </Separator>
        <SectionFirst>
      <h2>Position Absolute Spicy Pizza</h2>
      <SelectedAddtWrapper>
          <h3>Size: </h3>{size}
          <h3>Dough: </h3>{dough}
          <h3>Additional Ingredients: </h3>{addtIngredients.join(", ")}
        </SelectedAddtWrapper>
        </SectionFirst>
      <OrderTotal>
            <h2>Order Total</h2>
            <TotalWrapper><h2>Selections: </h2><h3>{addtIngredientsTotal * unit} €</h3></TotalWrapper>
            <TotalWrapper><h2>Total: </h2><h3>{(15.50 + addtIngredientsTotal) * unit} €</h3></TotalWrapper>
      </OrderTotal>

      </PageWrapper>
    </>
  );
}