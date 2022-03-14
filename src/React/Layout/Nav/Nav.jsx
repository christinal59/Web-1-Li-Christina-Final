import React, { useState }from 'react';
import styled from 'styled-components';

/* Sripts ---------------------------*/
import{defaultMediaQueries, useMediaQuery} from 'React/common/useMediaQuery.js';

/* Components ---------------------------*/
import MainMenu from './MainMenu.jsx';
import Hamburger from './Hamburger.jsx';

const Nav = () => {

    const { media } = useMediaQuery();

    const [showMenu, showMenuUpdate] = useState(false);

    return (
        <NavStyled className='Nav'>
            {
                    !media.mdUp &&
                    <Hamburger showMenu={ showMenu } showMenuUpdate={ showMenuUpdate }/>
            }
            {
                (media.mdUp || showMenu) &&
                <MainMenu showMenuUpdate={ showMenuUpdate }/>
            }
        </NavStyled>
    );
}

export default Nav;

const NavStyled = styled.nav`
    background-color: #abdfff;
    padding: 20px;
    color: white;
    `;