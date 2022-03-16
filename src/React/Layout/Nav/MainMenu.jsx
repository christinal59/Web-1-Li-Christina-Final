import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';


/* Scripts ---------------------------*/
import{defaultMediaQueries} from 'React/common/useMediaQuery.js';

const MainMenu = ({showMenuUpdate}) => {

    const clickHandler = () => {
        showMenuUpdate(false);
    }

    return (
        <MainMenuStyled className='MainMenu' >
            <NavLink onClick={ clickHandler} to={ '/' } exact>Homepage</NavLink>
            <NavLink onClick={ clickHandler} to={ '/services' }>Portfolio</NavLink>
            <NavLink onClick={ clickHandler} to={ '/contact' }>Contact</NavLink>
            <NavLink onClick={ clickHandler} to={ '/login' }>Industry Work</NavLink>
            <NavLink onClick={ clickHandler} to={ '/homework' }>Homework</NavLink>
        </MainMenuStyled>
    );
}

export default MainMenu;

const MainMenuStyled = styled.div`
    

    a {
        display: block;
        color: black;
        margin: 5px 0px;
        background-color: cmyk(0,0,0,0);
        height: 50px;
        line-height: 55px;
        text-decoration: none;
        text-align: center;

        border-radius: 5px;

        text-transform: uppercase;
        font-weight: bold;

        &:hover {
            background-color: #add8e6;
        }

        &.active {
            color: #007373;
            background-color:#add8e6;
        }

    }

    @media ${defaultMediaQueries.mdUp} {
                display: flex;
                justify-content: center;
                a {
                    display: inline-block;
                    width: 150px;
                    margin: 0px 5px;
                    font-size: 14px;
                    border-radius: 5px;
                }
            }
`;