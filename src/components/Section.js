import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';


function Section({title, description, backgroundImg,
leftBtnText, rightBtnText}) {
    return (
        <Wrap bgImg={backgroundImg}>
            <Fade bottom>
            <ItemText>
            <h1>
                {title}
            </h1>
            <p>{description} </p>
            
            </ItemText>
            </Fade>
       


         
            <BottomItems>
            <Fade bottom>
                <ButtonGroup>
                <LeftButton>{leftBtnText}</LeftButton>
                {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
                
            </ButtonGroup>
            </Fade>
            <DownArror src='/images/down-arrow.svg'/>
            </BottomItems>
          
        </Wrap>
    )
}





export default Section
const Wrap = styled.div`
width:100vw;
height: 100vh;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
display:flex;
flex-direction:column;
justify-content: space-between;
align-items:center;
background-image:${props=>`url('/images/${props.bgImg}')` };

`

const ItemText = styled.div `
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`
display:flex;
margin-bottom: 30px;
@media(max-width:768px){
    flex-direction:column;
}

`
const LeftButton = styled.div`
    background-color:rgba(23, 26, 32, 0.8);
    height: 40px;
    width:256px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:20px;
    opacity:0.85;
    text-transform:uppercase;
    font-size:12px;
    cursor:pointer;
    margin:8px;

`
const DownArror = styled.img`
height: 40px;
margin-top:20px;
animation:animateDown infinite 1.5s;

`
const RightButton = styled(LeftButton)`
background-color:white;
opacity:0.65;
color:black;
`

const BottomItems = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
`