// import logo from "./logo.svg";
import "./App.css";
import {
  Title,
  P,
  Box,
  Div,
  IconImg,
  ButtonContactMe,
} from "./styles/styledComponents";
import Navbar from "./components/Navbar/Navbar";
import IconTechs from "./components/Cards/IconTechs";
import iconHacker from "./utils/images/Hacker-PNG-Clipart.png";

function App() {
  return (
    <div className="App">
      {/* <Title>App Component</Title> */}
      <Navbar />
      <Box
        // bg="#fff" bg="orange"
        hg="60vh"
        posTop="3vh"
        jfCont="center"
        alItems="center"
        wd="102%"
        zInd="0"
        // mb="3vh"
        pd="10px"
      >
        <Div
          // bg="orangered"
          wd="100%"
          jfCont="space-around"
          hg="100%"
          alItems="center"
        >
          <Div
            // bg="blue"
            flexDir="column"
            alItems="center"
            jfCont="center"
            wd="50%"
            bg="blue"
          >
            <Title>
              Hola! mi nombre es Julian, soy desarrollador web full-stack
            </Title>
            <ButtonContactMe>Contacta conmigo</ButtonContactMe>
          </Div>

          <Div wd="50%" hg="100%" bg="purple" jfCont="center" alItems="center">
            <IconImg src={iconHacker} />
          </Div>
        </Div>
      </Box>

      <Box hg="80vh" bg="red" flexDir="column">
        <P fSize="1.6rem" fWeight="500">
          Tecnologias
        </P>
        <IconTechs></IconTechs>
      </Box>
    </div>
  );
}

export default App;
{
  /*
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
</header>
  */
}
