import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Container = styled.div`
padding: 10px;
height: 60px;
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;

`;

const Language = styled.span`
font-size: 14px;
cursor: pointer;
`;

const SearchContainer = styled.div`
border: 0.5px solid lightgrey;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`;


const Input = styled.input`
border: none;
`;

const Logo = styled.h1`
font-weight: bold;
`
const Center = styled.div`
flex: 1;
text-align: center;
`;
const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`;

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
`;

const Navbar = ({quantity}) => {
  return (
    <Container>
       <Wrapper>
        <Left> 
        <Language>
            EN
        </Language>
        <SearchContainer>
          <Input/>
        <Search style={{color: "grey",fontSize: 16}}/>
        </SearchContainer>
        </Left>
        
        <Center><Logo>STYLE HOUSE.</Logo></Center>
        <Right>
        <Link to="/register">
        <MenuItem>Register</MenuItem>
        </Link>
        <Link to="/login">
        <MenuItem>Sign In</MenuItem>
        </Link>
        <Link to="/cart" >
        <MenuItem>
        <Badge badgeContent={quantity} color="primary">
        <ShoppingCartOutlined />
        </Badge>
        </MenuItem>
        </Link>

        </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
