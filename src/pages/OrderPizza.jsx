import styled, { createGlobalStyle } from 'styled-components';
import { Form, Label, Input, Button, FormGroup } from 'reactstrap';

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
`;

const Banner = styled.div`
  background-color: #CE2829;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  min-height: 10vh; 
  width: 100%;
  padding: 1rem;
  align-items:center;
`;

const TitleFirst = styled.div`
  width: 50%;
  font-size: 2rem;
  color: white;
`;

const MenuItems = styled.p`
  width: 50%;
  font-size: 1rem;
  color: white;
  display:flex;
  text-align: left;
`;

const MainPage = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 50%;
  border: 1px solid black;
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
gap:20rem;
width:100%;
justify-content: flex-start;
padding: 1rem 0;
`

const BoyutSecenekleri =styled.div`
padding-top:1rem;
text-align:left;
`

const HamurKalinligi = styled.div`
padding-top:1rem;
`

const Titles = styled.p`
text-align:left;
font-weight: bold;
`
const EkMalzemeler = styled.div`
display:flex;
flex-direction:column;
padding: 1rem 0 5rem 0;
`

const EkMalzemelerMetin = styled.div`
display:flex;
flex-direction:column;
padding: 1rem 0;
`

const EkMalzemeSecenekler = styled.div`
display:grid;
grid-template-columns:repeat(3, 1fr);
text-align:left;
`

const StyledInput =styled(Input)`
color:#292929;
width:100%;
padding:1rem;
margin: 1rem 0 0 0;
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
`

export default function OrderPizza() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <Banner>
          <TitleFirst>Teknolojik Yemekler</TitleFirst>
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
          
          <Form>

          <BoyutHamurSec>
          <FormGroup>
          <Titles>
          <Label htmlFor='boyut'>Boyut Sec</Label><br></br>
         </Titles>
         <BoyutSecenekleri>
          <Input type="radio" id="kucuk" name="boyut" value="Kucuk"/>
          <Label htmlFor="kucuk"> Kucuk</Label><br></br>
          <Input type="radio" id="orta" name="boyut" value="Orta"/>
          <Label htmlFor="orta"> Orta</Label><br></br>
          <Input type="radio" id="buyuk" name="boyut" value="Buyuk"/>
          <Label htmlFor="buyuk"> Buyuk</Label>
          </BoyutSecenekleri>
        </FormGroup>

        <FormGroup>
        <Titles>
        <Label htmlFor='hamur'>Hamur Sec</Label></Titles>
        <HamurKalinligi>
            <select name="hamur" id="hamur">
            <option value="Hamur-Kalinligi">Hamur Kalinligi</option>
          </select>
        </HamurKalinligi>
        </FormGroup>
        </BoyutHamurSec>

       <FormGroup>
        <EkMalzemeler>
       <EkMalzemelerMetin>
       <Titles>Ek Malzemeler</Titles>
        <Description2>En Fazla 10 malzeme secebilirsiniz. 5TL</Description2>
        </EkMalzemelerMetin>
        <EkMalzemeSecenekler>
        <Label> <input type="checkbox" name="ek-malzemeler" value="Pepperoni"/> Pepperoni</Label>
        <Label> <input type="checkbox" name="ek-malzemeler" value="Sosis"/> Sosis</Label>
        <Label> <input type="checkbox" name="ek-malzemeler" value="Kanada-Jambonu"/> Kanada Jambonu</Label>
        <Label> <input type="checkbox" name="ek-malzemeler" value="Tavuk-Izgara"/> Tavuk Izgara</Label>
        <Label> <input type="checkbox" name="ek-malzemeler" value="Sogan"/> Sogan</Label>
        <Label> <input type="checkbox" name="ek-malzemeler" value="Domates"/> Domates</Label>
        <Label> <input type="checkbox" name="ek-malzemeler" value="Misir"/> Misir</Label>
        <Label> <input type="checkbox" name="ek-malzemeler" value="Sucuk"/> Sucuk</Label>
        <Label> <input type="checkbox" name="ek-malzemeler" value="Jalepeno"/> Jalepeno</Label>
        <Label> <input type="checkbox" name="ek-malzemeler" value="Sarimsak"/> Sarimsak</Label>
        <Label> <input type="checkbox" name="ek-malzemeler" value="Biber"/> Biber</Label>
        <Label> <input type="checkbox" name="ek-malzemeler" value="Sucuk2"/> Sucuk2</Label>
        <Label> <input type="checkbox" name="ek-malzemeler" value="Ananas"/> Ananas</Label>
        <Label> <input type="checkbox" name="ek-malzemeler" value="Kabak"/> Kabak</Label>
        </EkMalzemeSecenekler>
        </EkMalzemeler>
       </FormGroup>
       

            <FormGroup>
            <Titles>
              <Label htmlFor="siparisNotu">Siparis Notu:</Label></Titles>
              <StyledInput type="text" id="siparisNotu" rows="1" placeholder='Siparisine eklemek istedigin bir not var mi?'/>
            </FormGroup>

          </Form>


          <Ayrac></Ayrac>

    <Ozet>
    <EkleCikar>
    <ButtonAzalt>-</ButtonAzalt>
    <Rakam>1</Rakam>
    <ButtonArtir>+</ButtonArtir>
    </EkleCikar>
    
    <SiparisToplami>
        <SiparisMetinler>
        <Titles>Siparis Toplami</Titles>
        <SecimlerWrapper><Secimler>Secimler</Secimler><SecimlerTL>25.00TL</SecimlerTL></SecimlerWrapper>
        <ToplamWrapper><Toplam>Toplam</Toplam><ToplamTL>110.50TL</ToplamTL></ToplamWrapper>
        </SiparisMetinler>
        <SiparisVer>SIPARIS VER</SiparisVer>
    </SiparisToplami>
    
    </Ozet>

    </MainPage>
      </PageWrapper>
    </>
  );
}
