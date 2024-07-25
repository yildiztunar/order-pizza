import styled, { createGlobalStyle } from 'styled-components';
import { Form, Label, Input, Button, Row } from 'reactstrap';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import AddsIngredients from '../components/AddsIngredients';
import SizeSelection from '../components/SizeSelection';
import NameInput from '../components/NameInput';
import NoteInput from '../components/NoteInput';
import DoughSelection from '../components/DoughSelection';


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
`;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  min-height: 100vh;
  width: 100%;
  font-family: "Barlow", sans-serif;
`;

const Banner = styled.div`
  background-color: #CE2829;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 99vw;
  padding: 2rem;
  align-items: center;
  margin: 0; 
  position: relative;
`;

const Header = styled.div`
  font-family: "Barlow", sans-serif;
  font-weight:bold;
  width: 100%;
  font-size: 2rem;
  color: white;
  text-align: center;
`;

const MenuItems = styled.p`
  font-size: 1rem;
  color: white;
  text-align: center;

`;

const MainPage = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 70%;
  padding: 1rem;
  
`;

const Description = styled.p`
text-align:left;
color:#5F5F5F;
padding: 1rem 0;
`

const Description2 = styled.p`
text-align:left;
color:#5F5F5F;
`
const Details = styled.p`
display:flex;
justify-content:space-between;
padding: 1rem 0;
`

const Price = styled.p`
font-weight: bold;
`
const Score = styled.div`
display:flex;
align-items:flex-end;
gap:6rem;
`

const Score1 = styled.p`
color: #5F5F5F;
`

const Score2 = styled.p`
color: #5F5F5F;
`

const SelectSizeDough = styled.div`
display:flex;
flex-wrap: wrap;
gap: 2rem;
width:100%;
justify-content: space-between;
padding: 1rem 0;
`

const SizeOptions =styled.div`
padding-top:1rem;
text-align:left;
`

const DoughThickness = styled.div`
padding-top:1rem;
padding-right: 15rem;
text-align:left;


`
const NameNoteWrapper = styled.div`
padding: 1rem 0 1rem 0;
`

const Titles = styled.p`
display: flex;
flex-direction: column;
text-align:left;
font-weight: bold;

label {
    margin: 5px 0;
    display: flex;
    align-items: center;
    
  }

  input {
    margin-right: 10px;
    padding: 10px;
    border:#5F5F5F solid 0.01rem;
    border-radius: 0.3rem;
    width: 19rem;
  }

`
const AdditionalIng = styled.div`
display:flex;
flex-direction:column;
padding: 1rem 0 1rem 0;
`

const AdditionalIngText = styled.div`
display:flex;
flex-direction:column;
padding: 1rem 0;
`


const StyledInput =styled(Input)`
color:#292929;
width:100%;
padding:1rem;
margin: 0.5rem 0;
border: #5F5F5F solid 0.05rem;
border-radius: 0.5rem;
`

const Separator = styled.div`
border-bottom: #5F5F5F solid 0.05rem;
margin: 2rem 0 ;
min-width:18rem;
`

const Summary = styled.div`
padding: 1rem 0 1rem 0;
display:flex;
gap: 1rem;
justify-content:space-between;
`

const AddSubtract = styled.div`
display:flex;
`

const ButtonDecrease = styled(Button)`
width:2.5rem;
height:3rem;
background-color:#FDC913;
text-align:center;
align-content:center;
`
const Num = styled.p`
text-align:center;
align-content:center;
width:2.5rem;
height:3rem;
border-top:#5F5F5F solid 0.05rem;
border-bottom:#5F5F5F solid 0.05rem;
border-radius: 0.2rem;
`
const ButtonIncrease = styled(Button)`
width:2.5rem;
height:3rem;
background-color:#FDC913;
text-align:center;
align-content:center;
`
const OrderTotal = styled.div`
border:#5F5F5F solid 0.05rem;
border-radius: 0.5rem;
width:25rem;
`
const OrderTexts = styled.div`
padding:1rem 1rem;
`
const SelectionsWrapper = styled.p`
display:flex;
justify-content:space-between;
`
const Selections = styled.p`
padding-top:1rem;
text-align:left;
color: #292929;
`
const SelectionsEuro = styled.p`
padding-top:1rem;
text-align:left;
`
const TotalWrapper = styled.p`
display:flex;
justify-content:space-between;
`
const Total = styled.p`
text-align:left;
color:#CE2829;
font-weight:bold;
`
const TotalEuro = styled.p`
text-align:left;
color:#CE2829;
font-weight:bold;
`

const PlaceOrder = styled.button`
background-color:#FDC913;
width:100%;
border-radius: 0.2rem;
font-weight:bold;
`

const ErrorMessage=styled.p`
color:red;
`

const initialFormData = {
username:"",
orderNote:"",
size:"small",
dough:"thin",
addtIngredients:[]
};

const errorMessages ={
  username: "Please enter a name consisting of at least 3 characters.",
  orderNote: "Please enter an order note.",
  size: "Please select a pizza size.",
  dough: "Please select a dough thickness.",
  addtIngredients: "Please choose at least 4 and at most 10 options.",
}


export default function OrderPizza() {

const [formData, setFormData] = useState(initialFormData);
const [errors, setErrors] = useState(
{
username:false,
orderNote:false,
size:false,
dough:false,
addtIngredients:false,
}
);

const [isValid, setIsValid] = useState(false);
const [addtIngredientsTotal, setaddtIngredientsTotal] = useState(0);
const [unit, setUnit] = useState(1);
const history = useHistory();

useEffect(()=> {
    const {username, orderNote, size, dough, addtIngredients} = formData;
    if(validateName(username) && validateNote(orderNote) && validateSize(size) && validateDough(dough) && validateAddtIngredients(addtIngredients)){
        setIsValid(true)
    } else {
        setIsValid(false)
    }
}, [formData])


function handleSubmit(event) {
    event.preventDefault();
    if (!isValid) return;

    const URL="https://reqres.in/api/pizza";
    axios.post(URL, formData).then((response)=> {
        setFormData(initialFormData);
        console.log(response)
        history.push({
          pathname: "/success",
          state: {
            size: formData.size,
            dough: formData.dough,
            addtIngredients: formData.addtIngredients,
            addtIngredientsTotal: addtIngredientsTotal,
            unit: unit
        }
        });
    });
}

function validateName(username) {
    return username.length >= 3;
}

function validateNote(orderNote) {
    return orderNote.length >= 3;
}

function validateSize(size) {
    return size !== '';
}

function validateDough(dough) {
    return dough !== '';
}

function validateAddtIngredients(addtIngredients) {
    const selectedCount = addtIngredients.length;
    return selectedCount >= 4 && selectedCount <= 10;
}


function handleArtir() {
    setUnit(unit + 1);
}

function handleAzalt() {
    if (unit > 1) {
        setUnit(unit - 1);
    }
}


function handleChange(event) {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
        const updatedAddtIngredients = checked
          ? [...formData.addtIngredients, value]
          : formData.addtIngredients.filter(item => item !== value);
      
        setFormData({ ...formData, addtIngredients: updatedAddtIngredients });
      
        const isAddtIngredientsValid = validateAddtIngredients(updatedAddtIngredients);
        setErrors({ ...errors, addtIngredients: !isAddtIngredientsValid });
      
        setaddtIngredientsTotal(updatedAddtIngredients.length * 1.5); 
      } else {
        setFormData({ ...formData, [name]: value });

    if (name === "username") {
            setErrors({ ...errors, username: !validateName(value) });
        } else if (name === "orderNote") {
            setErrors({ ...errors, orderNote: !validateNote(value) });
        } else if (name === "size") {
            setErrors({ ...errors, size: !validateSize(value) });
        } else if (name === "dough") {
            setErrors({ ...errors, dough: !validateDough(value) });
        }
    }

    const { username, orderNote, size, dough, addtIngredients } = formData;
    setIsValid(
        validateName(username) &&
        validateNote(orderNote) &&
        validateSize(size) &&
        validateDough(dough) &&
        validateAddtIngredients(addtIngredients)
    );
}


  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <Banner>
          <Header>Technological Meals</Header>
          <MenuItems>Place Order</MenuItems>
        </Banner>
        <MainPage>

        <Titles>Position: Absolute Spicy Pizza</Titles>
        <Details>
            <Price>15.50 Euro</Price>
            <Score>
            <Score1>4.9</Score1>
            <Score2>(200)</Score2>
            </Score>
            </Details>
        <Description>As a Frontend Dev, if you're still using position: absolute, this very spicy pizza is perfect for you. Pizza is a savory Italian dish consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven. A small pizza is sometimes called a pizzetta.</Description>
          
        <Form onSubmit={handleSubmit}>

        <SelectSizeDough>
        <Row>
        <Titles>
        <Label htmlFor='size'>Select Size</Label><br></br>
        </Titles>
        <SizeOptions>
        <SizeSelection size={formData.size} handleChange={handleChange}/>
        </SizeOptions>
        {errors.size && <ErrorMessage>{errorMessages.size}</ErrorMessage>}
        </Row>

        <Row>
        <Titles>
        <Label htmlFor='dough'>Select Dough</Label>
        </Titles>
        <DoughThickness>
        <DoughSelection dough={formData.dough} handleChange={handleChange} />
        </DoughThickness>
        {errors.dough && <ErrorMessage>{errorMessages.dough}</ErrorMessage>}
        </Row>
        </SelectSizeDough>

       <Row>
       <AdditionalIng>
       <AdditionalIngText>
       <Titles>Additional Ingredients</Titles>
        <Description2>You can select up to 10 ingredients. 1.5 Euro each.</Description2>
        </AdditionalIngText>
        
          <AddsIngredients addtIngredients={formData.addtIngredients} handleChange={handleChange} />
          
        </AdditionalIng>
        {errors.addtIngredients && <ErrorMessage>{errorMessages.addtIngredients}</ErrorMessage>}
        </Row>
       <NameNoteWrapper>
            <Row>
            <Titles>
              <Label htmlFor="username">Name:</Label>
              <NameInput username={formData.username} handleChange={handleChange}/>
              {errors.username && <ErrorMessage>{errorMessages.username}</ErrorMessage>}
              </Titles>
            </Row>

            <Row>
            <Titles>
              <Label htmlFor="orderNote">Order Note:</Label>
              <NoteInput orderNote={formData.orderNote} handleChange={handleChange}/>
              {errors.orderNote && <ErrorMessage>{errorMessages.orderNote}</ErrorMessage>}
              </Titles>
            </Row>
            </NameNoteWrapper>
          <Separator></Separator>

    <Summary>

    <AddSubtract>
    <ButtonDecrease onClick={handleAzalt}>-</ButtonDecrease>
    <Num>{unit}</Num>
    <ButtonIncrease onClick={handleArtir}>+</ButtonIncrease>
    </AddSubtract>
    
    <OrderTotal>
        <OrderTexts>
        <Titles>Order Total</Titles>
        <SelectionsWrapper><Selections>Selections</Selections><SelectionsEuro>{addtIngredientsTotal*unit} Euro</SelectionsEuro></SelectionsWrapper>
        <TotalWrapper><Total>Total</Total><TotalEuro>{(15.50 + addtIngredientsTotal) * unit} Euro</TotalEuro></TotalWrapper>
        </OrderTexts>
        <PlaceOrder type="submit" disabled={!isValid} data-cy="submit-orderPizza-form">PLACE ORDER</PlaceOrder>
    </OrderTotal>

    </Summary>

    </Form>

    </MainPage>
    </PageWrapper>
    </>
  

  );
  
}
