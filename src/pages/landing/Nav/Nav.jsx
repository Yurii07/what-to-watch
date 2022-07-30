import styled, { css } from 'styled-components';

import netflixlogo from './img/logo.svg';
import { Link } from 'react-router-dom'

const Nav = styled.nav`
    height: 90px;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    /* Netflix logo */
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        width: 167px;
        height : 45px;
        vertical-align: middle;
    }
    .logo {
        display: inline-block;
        line-height: 90px;
        margin: 0 0 0 3%;
    }
`;

const Button = styled(Link)`
    color: white;
    cursor: pointer;
    background-color: #e50914;
    line-height: normal;
    margin: 18px 3% 0 0;
    padding: 7px 17px;
    font-weight: 700;
    border: transparent;
    border-radius: 3px;
    font-size: 16px;
    text-decoration: one;

    ${props => props.right && css`
        float: right;
    `}
    &:hover {
        background-color: #E53935;
    }
`;

const nav = () => {
    return (
        <Nav>
            <a href={"/login"} className="logo">
                <img src={netflixlogo} alt="Netflix Logo" />
            </a>

            <Button to="/login">SIGN IN</Button>

        </Nav>
    )
}

export default nav;