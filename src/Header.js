import React from 'react'
import styled from "styled-components"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <Container>

            <HeaderLogo >
                <Link to="/">
                <img src={"https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png"}/>
                </Link>
            </HeaderLogo>
            
            <HeaderOptionAddress>
                <LocationOnIcon/>
                <HeaderOption>
                <OptionLineOne>Hello</OptionLineOne>
                <OptionLineTwo>Select your address</OptionLineTwo>
                </HeaderOption>
            </HeaderOptionAddress>

            <HeaderSearch>
                <HeaderSearchInput type="text" />
                <HeaderSearchIconContainer>
                <SearchIcon />
            </HeaderSearchIconContainer>
            </HeaderSearch>

            <HeaderNavItems>
                <HeaderOption>
                    <HeaderOptionLineOne>Hello, Sayed</HeaderOptionLineOne>
                    <HeaderOptionLineOne>Account & Lists</HeaderOptionLineOne>
                </HeaderOption>
                <HeaderOption>
                    <HeaderOptionLineOne>Returns</HeaderOptionLineOne>
                    <HeaderOptionLineOne>& Orders</HeaderOptionLineOne>
                </HeaderOption>
                
                <HeaderOptionCart>
                <Link to="/cart">
                    <ShoppingBasketIcon />
                    <CartCount>4</CartCount>
                    </Link>
                </HeaderOptionCart>
                
            </HeaderNavItems>
            </Container>
        </div>
    )
}

export default Header

const Container = styled.div`
    height: 60px;
    background-color: #0F1111;
    display: flex;
    align-items: center;
    color: white;
    justify-content: space-between;
`
const HeaderLogo = styled.div`
    display: flex;
    align-items: center;
    height: 100%;    
    img {
        width: 100px;
        margin-left: 11px;
    };
    

`

const HeaderOptionAddress = styled.div`
    padding-left: 9px;
    display: flex;
    align-items: center;
`

const OptionLineOne = styled.div`
`
const OptionLineTwo = styled.div`
    font-weight: 700;
`
const HeaderSearchInput = styled.input`
    flex-grow: 1;
    border: 0;
    :focus {
        border: none;
    }
`
const HeaderSearch = styled.div`
    display: flex;
    flex-grow: 1;
    height: 40px;
    border-radius: 4px;
    overflow: hidden;
    margin-left: 4px;
    background-color: white;
    :focus-within {
        box-shadow: 0 0 0 3px #F90
    }
`

const HeaderSearchIconContainer = styled.div`
    background-color: #febd69;
    width: 45px;
    color: black;
    justify-content: center;
    display: flex;
    align-items: center;
`
const HeaderNavItems = styled.div`
    display: flex;
`
const HeaderOption = styled.div`
    padding: 10px 9px 10px 9px;   
    padding-left: 9px;
    padding-right: 9px;
    padding-top: 10px;
    padding-bottom: 10px;
`
const HeaderOptionCart = styled.div`
display: flex;
a { 
    display: flex;
    align-items: center;
    padding-right: 9px;
    color: white;
    text-decoration: none;
}   
`
const CartCount = styled.div`
    padding-left: 4px;
`
const HeaderOptionLineOne = styled.div``
const HeaderOptionLineTwo = styled.div``