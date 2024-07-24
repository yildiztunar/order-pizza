import styled, { createGlobalStyle } from 'styled-components';
import { Form, Label, Input, Button, Row } from 'reactstrap';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import EkMalzemeSecenekler from '../components/EkMalzemeSecenekler';
import HamurSecimi from '../components/HamurSecimi';
import BoyutSecimi from '../components/BoyutSecimi';
import IsimInput from '../components/IsimInput';
import SiparisNotuInput from '../components/SiparisNotuInput';


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
  padding: 1rem;
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
  width: 50%;
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
const Detaylar = styled.p`
display:flex;
justify-content:space-between;
padding: 1rem 0;
`

const Ucret = styled.p`
font-weight: bold;
`
const PuanBegeni = styled.div`
display:flex;
align-items:flex-end;
gap:6rem;
`

const Puan = styled.p`
color: #5F5F5F;
`

const Begeni = styled.p`
color: #5F5F5F;
`

const BoyutHamurSec = styled.div`
display:flex;
width:100%;
justify-content: space-between;
padding: 1rem 0;
`

const BoyutSecenekleri =styled.div`
padding-top:1rem;
text-align:left;
`

const HamurKalinligi = styled.div`
padding-top:1rem;
padding-right:8rem;
`

const Titles = styled.p`
text-align:left;
font-weight: bold;
`
const EkMalzemeler = styled.div`
display:flex;
flex-direction:column;
padding: 1rem 0 1rem 0;
`

const EkMalzemelerMetin = styled.div`
display:flex;
flex-direction:column;
padding: 1rem 0;
`

const EkMalzemeSeceneklerStyle = styled.div`
display:grid;
grid-template-columns:repeat(3, 1fr);
text-align:left;
color: #292929;
font-weight:bold;
`

const StyledInput =styled(Input)`
color:#292929;
width:100%;
padding:1rem;
margin: 0.5rem 0;
border: #5F5F5F solid 0.05rem;
border-radius: 0.5rem;
`

const Ayrac = styled.div`
border-bottom: #5F5F5F solid 0.05rem;
margin: 2rem 0 ;
`

const Ozet = styled.div`
display:flex;
justify-content:space-between;
`

const EkleCikar = styled.div`
display:flex;
`

const ButtonAzalt = styled(Button)`
width:2.5rem;
height:3rem;
background-color:#FDC913;
text-align:center;
align-content:center;
`
const Rakam = styled.p`
text-align:center;
align-content:center;
width:2.5rem;
height:3rem;
border-top:#5F5F5F solid 0.05rem;
border-bottom:#5F5F5F solid 0.05rem;
border-radius: 0.2rem;
`
const ButtonArtir = styled(Button)`
width:2.5rem;
height:3rem;
background-color:#FDC913;
text-align:center;
align-content:center;
`
const SiparisToplami = styled.div`
border:#5F5F5F solid 0.05rem;
border-radius: 0.5rem;
width:70%;
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
color: #292929;
`
const SecimlerTL = styled.p`
padding-top:1rem;
text-align:left;
`
const ToplamWrapper = styled.p`
display:flex;
justify-content:space-between;
`
const Toplam = styled.p`
text-align:left;
color:#CE2829;
font-weight:bold;
`
const ToplamTL = styled.p`
text-align:left;
color:#CE2829;
font-weight:bold;
`

const SiparisVer = styled(Button)`
background-color:#FDC913;
width:100%;
border-radius: 0.2rem;
font-weight:bold;
`

const ErrorMessage=styled.p`
color:red;
`

const initialFormData = {
isim:"",
siparisNotu:"",
boyut:false,
hamur:"",
ekMalzemeler:[]
};

const errorMessages ={
isim:"En az 3 karakterden olusan bir isim giriniz.",
siparisNotu:"Siparis notu giriniz.",
boyut:"Pizza boyutu seciniz.",
hamur:"Hamur kalinligi seciniz.",
ekMalzemeler:"En az 4 ve en fazla 10 adet secim yapiniz.",
}


export default function OrderPizza() {

const [formData, setFormData] = useState(initialFormData);
const [errors, setErrors] = useState(
{
isim:false,
siparisNotu:false,
boyut:false,
hamur:false,
ekMalzemeler:false,
}
);

const [isValid, setIsValid] = useState(false);
const [ekMalzemeToplam, setEkMalzemeToplam] = useState(0);
const [adet, setAdet] = useState(1);
const history = useHistory();

useEffect(()=> {
    const {isim, siparisNotu, boyut, hamur, ekMalzemeler} = formData;
    if(validateIsim(isim) && validateSiparisNotu(siparisNotu) && validateBoyut(boyut) && validateHamur(hamur) && validateEkMalzemeler(ekMalzemeler)){
        setIsValid(true)
    } else {
        setIsValid(false)
    }
}, {formData})


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
            boyut: formData.boyut,
            hamur: formData.hamur,
            ekMalzemeler: formData.ekMalzemeler,
            ekMalzemeToplam: ekMalzemeToplam,
            adet: adet
        }
        });
    });
}

function validateIsim(isim) {
    return isim.length >= 3;
}

function validateSiparisNotu(siparisNotu) {
    return siparisNotu.length >= 3;
}

function validateBoyut(boyut) {
    return boyut !== '';
}

function validateHamur(hamur) {
    return hamur !== '';
}

function validateEkMalzemeler(ekMalzemeler) {
    const selectedCount = ekMalzemeler.length;
    return selectedCount >= 4 && selectedCount <= 10;
}


function handleArtir() {
    setAdet(adet + 1);
}

function handleAzalt() {
    if (adet > 1) {
        setAdet(adet - 1);
    }
}


function handleChange(event) {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
        const updatedEkMalzemeler = checked
          ? [...formData.ekMalzemeler, value]
          : formData.ekMalzemeler.filter(item => item !== value);
      
        setFormData({ ...formData, ekMalzemeler: updatedEkMalzemeler });
      
        const isEkMalzemelerValid = validateEkMalzemeler(updatedEkMalzemeler);
        setErrors({ ...errors, ekMalzemeler: !isEkMalzemelerValid });
      
        setEkMalzemeToplam(updatedEkMalzemeler.length * 5); 
      } else {
        setFormData({ ...formData, [name]: value });

    if (name === "isim") {
            setErrors({ ...errors, isim: !validateIsim(value) });
        } else if (name === "siparisNotu") {
            setErrors({ ...errors, siparisNotu: !validateSiparisNotu(value) });
        } else if (name === "boyut") {
            setErrors({ ...errors, boyut: !validateBoyut(value) });
        } else if (name === "hamur") {
            setErrors({ ...errors, hamur: !validateHamur(value) });
        }
    }

    const { isim, siparisNotu, boyut, hamur, ekMalzemeler } = formData;
    setIsValid(
        validateIsim(isim) &&
        validateSiparisNotu(siparisNotu) &&
        validateBoyut(boyut) &&
        validateHamur(hamur) &&
        validateEkMalzemeler(ekMalzemeler)
    );
}


  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <Banner>
          <Header>Teknolojik Yemekler</Header>
          <MenuItems>Anasayfa - Siparis Olustur</MenuItems>
        </Banner>
        <MainPage>

        <Titles>Position Absolute Aci Pizza</Titles>
        <Detaylar>
            <Ucret>85.50 TL</Ucret>
            <PuanBegeni>
            <Puan>4.9</Puan>
            <Begeni>(200)</Begeni>
            </PuanBegeni>
            </Detaylar>
        <Description>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.</Description>
          
        <Form onSubmit={handleSubmit}>

        <BoyutHamurSec>
        <Row>
        <Titles>
        <Label htmlFor='boyut'>Boyut Sec</Label><br></br>
        </Titles>
        <BoyutSecenekleri>
        <BoyutSecimi boyut={formData.boyut} handleChange={handleChange}/>
        </BoyutSecenekleri>
        {errors.boyut && <ErrorMessage>{errorMessages.boyut}</ErrorMessage>}
        </Row>

        <Row>
        <Titles>
        <Label htmlFor='hamur'>Hamur Sec</Label>
        </Titles>
        <HamurKalinligi>
        <HamurSecimi hamur={formData.hamur} handleChange={handleChange} />
        </HamurKalinligi>
        {errors.hamur && <ErrorMessage>{errorMessages.hamur}</ErrorMessage>}
        </Row>
        </BoyutHamurSec>

       <Row>
       <EkMalzemeler>
       <EkMalzemelerMetin>
       <Titles>Ek Malzemeler</Titles>
        <Description2>En Fazla 10 malzeme secebilirsiniz. 5TL</Description2>
        </EkMalzemelerMetin>
        <EkMalzemeSeceneklerStyle>
          <EkMalzemeSecenekler ekMalzemeler={formData.ekMalzemeler} handleChange={handleChange} />
          </EkMalzemeSeceneklerStyle>
        </EkMalzemeler>
        {errors.ekMalzemeler && <ErrorMessage>{errorMessages.ekMalzemeler}</ErrorMessage>}
        </Row>
       
            <Row>
            <Titles>
              <Label htmlFor="isim">Isim:</Label></Titles>
              <IsimInput isim={formData.isim} handleChange={handleChange}/>
              {errors.isim && <ErrorMessage>{errorMessages.isim}</ErrorMessage>}
            </Row>

            <Row>
            <Titles>
              <Label htmlFor="siparisNotu">Siparis Notu:</Label></Titles>
              <SiparisNotuInput siparisNotu={formData.siparisNotu} handleChange={handleChange}/>
              {errors.siparisNotu && <ErrorMessage>{errorMessages.siparisNotu}</ErrorMessage>}
            </Row>

          <Ayrac></Ayrac>

    <Ozet>

    <EkleCikar>
    <ButtonAzalt onClick={handleAzalt}>-</ButtonAzalt>
    <Rakam>{adet}</Rakam>
    <ButtonArtir onClick={handleArtir}>+</ButtonArtir>
    </EkleCikar>
    
    <SiparisToplami>
        <SiparisMetinler>
        <Titles>Siparis Toplami</Titles>
        <SecimlerWrapper><Secimler>Secimler</Secimler><SecimlerTL>{ekMalzemeToplam*adet} TL</SecimlerTL></SecimlerWrapper>
        <ToplamWrapper><Toplam>Toplam</Toplam><ToplamTL>{(85.50 + ekMalzemeToplam) * adet} TL</ToplamTL></ToplamWrapper>
        </SiparisMetinler>
        <SiparisVer type="submit" disabled={!isValid} data-cy="submit-orderPizza-form">SIPARIS VER</SiparisVer>
    </SiparisToplami>

    </Ozet>

    </Form>

    </MainPage>
    </PageWrapper>
    </>
  

  );
  
}
