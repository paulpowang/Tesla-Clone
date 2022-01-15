import React, {useState} from 'react'
import styled from 'styled-components'
import {GoThreeBars} from "react-icons/go";
import {GoX} from "react-icons/go";
import {selectCars} from '../features/car/carSlice';
import {useSelector} from 'react-redux';


function Header() {
    const [openBurgerNav, setOpenBurgerNav] = useState(false);
    const cars = useSelector(selectCars);
    return (
        <Container>
           
            <a>
                <img src='/images/logo.svg' alt="logo" />
            </a>
            <Menu>
                {cars && cars.map((car, index)=>{
                    return <a key={index} href='#'>{car}</a>
                })}
            

            </Menu>
            <RightMenu>
            <a href='#'>Shop</a>
            <a href='#'>Tesla Account</a>
            <CustomMenu onClick={()=>{setOpenBurgerNav(true)}}/>
            </RightMenu>
 <BurgerNav show={openBurgerNav}>
                <CloseWrapper>
                <CustomClose onClick={()=>{setOpenBurgerNav(false)}}/>

                </CloseWrapper>
                {cars && cars.map((car, index)=>{
                    return <li><a key={index} href='#'>{car}</a></li>
                })}
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadaster</a></li>
            
            </BurgerNav>
            

        </Container>
    )
}

export default Header

const Container = styled.div`
display: flex;
min-height: 60px;
position: fixed;
align-items: center;
justify-content:space-between;
padding: 0 20px;
left:0;
right:0;
z-index:1;
`
const Menu = styled.div`
display:flex;
align-items:center;
flex:1;
justify-content:center;

a{
    font-weight: 600;
    text-transform: uppercase;
    padding:0 10px;
    flex-wrap: nowrap;
}
@media(max-width:768px){
    display:none;
}
`

const RightMenu = styled.div`
display:flex;
align-items:center;
a{
    font-weight: 600;
    text-transform: uppercase;
    margin-right:10px;
    
}
`

const CustomMenu = styled(GoThreeBars)`
    cursor:pointer;
`
const BurgerNav = styled.div`
position:fixed;
top:0;
right:0;
bottom:0;
z-index:10;
background:white;
width:300px;
list-style:none;
padding:20px;
    cursor:pointer;
    transform:${props => props.show? 'translateX(0)' : 'translateX(100%)' };
    transition: transform 0.2s ;
    li{
        padding:15px 0;
        border-bottom:1px solid rgba(0,0,0,.2);

        a{
            font-weight: 600;
            text-transform: uppercase;
     
            
        }
    }
`
const CustomClose= styled(GoX)`
cursor:pointer;
`
const CloseWrapper = styled.div`
display:flex;
justify-content:flex-end;
`