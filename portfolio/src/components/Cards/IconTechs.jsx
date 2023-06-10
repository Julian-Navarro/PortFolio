import { Div, P } from "../../styles/styledComponents";
import { TbBrandJavascript } from "react-icons/tb"
import { FaReact } from "react-icons/fa"
import { SiRedux, SiSequelize, SiPostgresql, SiHtml5, SiCss3 } from "react-icons/si"
import { IoLogoNodejs } from "react-icons/io"
import { AiFillGithub } from "react-icons/ai"
import { BsGit } from "react-icons/bs"

export default function IconTechs(){
    return (
    <Div bg="#fff"wd="100%" flWr="wrap"jfCont="space-evenly"pd=".5rem">

        <Div flexDir="column"alItems="center"mr="1rem">
          <Div bg="#333"hg="4rem"wd="4rem"jfCont="center"
              alItems="center"pd=".3rem"br="50%"
              bxSh="0 0 .4rem .2rem #fff,0 0 1.5rem .8rem #FFDF00, inset 0 0 .2rem .1rem #FFDF00">
            <TbBrandJavascript color="#FFDF00"fontSize={"4.5rem"}/>
          </Div>
          <P color="#333"fWeight="500">Javascript</P>
        </Div>



        <Div flexDir="column"alItems="center"mr="1rem">
          <Div bg="#333"hg="4rem"wd="4rem"jfCont="center"
              alItems="center"pd=".3rem"br="50%"
              bxSh="0 0 .4rem .2rem #fff,0 0 1.5rem .8rem #61DBFB, inset 0 0 .2rem .1rem #84e6ff">
            <FaReact color="#61DBFB"fontSize={"4.5rem"}/>
          </Div>
          <P color="#333"fWeight="500">React</P>
        </Div>

{/* ↑↑↑↑↑ Los de arriba estan terminados, los de abajo no hay que reemplazar el box shadow y cambiar los colores */}

        <Div flexDir="column"alItems="center"mr="1rem">
          <Div bg="#333"hg="4rem"wd="4rem"jfCont="center"
              alItems="center"pd=".3rem"br="50%"
              bxSh="0 0 .4rem .2rem #fff,0 0 1.5rem .8rem #764ABC, inset 0 0 .2rem .1rem #764ABC">
            <SiRedux color="#764ABC"fontSize={"3.4rem"}/>
          </Div>
          <P color="#333"fWeight="500">Redux</P>
        </Div>  



        <Div flexDir="column"alItems="center"mr="1rem">
          <Div bg="#333"hg="4rem"wd="4rem"jfCont="center"
              alItems="center"pd=".3rem"br="50%"
              bxSh="0 0 .4rem .2rem #fff,0 0 1.5rem .8rem #82CC25, inset 0 0 .2rem .1rem #82CC25">
            <IoLogoNodejs color="#82CC25"fontSize={"4.5rem"}/>
          </Div>
          <P color="#333"fWeight="500">Node.js</P>
        </Div> 


        <Div flexDir="column"alItems="center"mr="1rem">
          <Div bg="#333"hg="4rem"wd="4rem"jfCont="center"
              alItems="center"pd=".3rem"br="50%"
              bxSh="0 0 .4rem .2rem #fff,0 0 1.5rem .8rem #2279BE, inset 0 0 .2rem .1rem #2279BE">
            <SiSequelize color="#2279BE"fontSize={"3.7rem"}/>
          </Div>
          <P color="#333"fWeight="500">Sequelize</P>
        </Div>


        <Div flexDir="column"alItems="center"mr="1rem">
          <Div bg="#333"hg="4rem"wd="4rem"jfCont="center"
              alItems="center"pd=".3rem"br="50%"
              bxSh="0 0 .4rem .2rem #fff,0 0 1.5rem .8rem #2279BE, inset 0 0 .2rem .1rem #2279BE">
            <SiPostgresql color="#2279BE"fontSize={"3.3rem"}/>
          </Div>
          <P color="#333"fWeight="500">PostgreSQL</P>
        </Div>

        
        <Div flexDir="column"alItems="center"mr="1rem">
          <Div bg="#333"hg="4rem"wd="4rem"jfCont="center"
              alItems="center"pd=".3rem"br="50%"
              bxSh="0 0 .4rem .2rem #fff,0 0 1.5rem .8rem #DD502A, inset 0 0 .2rem .1rem #DD502A">
            <SiHtml5 color="#DD502A"fontSize={"3.1rem"}/>
          </Div>
          <P color="#333"fWeight="500">HTML</P>
        </Div>


        <Div flexDir="column"alItems="center"mr="1rem">
          <Div bg="#333"hg="4rem"wd="4rem"jfCont="center"
              alItems="center"pd=".3rem"br="50%"
              bxSh="0 0 .4rem .2rem #fff,0 0 1.5rem .8rem #2163B1, inset 0 0 .2rem .1rem #2163B1">
            <SiCss3 color="#2163B1"fontSize={"3.1rem"}/>
          </Div>
          <P color="#333"fWeight="500">CSS</P>
        </Div>

        <Div flexDir="column"alItems="center"mr="1rem">
          <Div bg="#333"hg="4rem"wd="4rem"jfCont="center"
              alItems="center"pd=".3rem"br="50%"
              bxSh="0 0 .4rem .2rem #fff,0 0 1.5rem .8rem #2163B1, inset 0 0 .2rem .1rem #2163B1">
            <AiFillGithub color="#2163B1"fontSize={"4rem"}/>
          </Div>
          <P color="#333"fWeight="500">Github</P>
        </Div>

        <Div flexDir="column"alItems="center"mr="1rem">
          <Div bg="#333"hg="4rem"wd="4rem"jfCont="center"
              alItems="center"pd=".3rem"br="50%"
              bxSh="0 0 .4rem .2rem #fff,0 0 1.5rem .8rem #F05033, inset 0 0 .2rem .1rem #F05033">
            <BsGit color="#F05033"fontSize={"3.8rem"}/>
          </Div>
          <P color="#333"fWeight="500">Git</P>
        </Div>

    </Div>
    )
}