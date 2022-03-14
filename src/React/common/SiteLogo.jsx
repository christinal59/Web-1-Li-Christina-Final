import React from 'react';
import styled from 'styled-components';


const SiteLogo = () => {

    return (
        <SiteLogoStyled className='SiteLogo'>
            <img src="/assets/img/fox-logo.png" className='foxlogo'/>
        </SiteLogoStyled>
    );
}

export default SiteLogo;

const SiteLogoStyled = styled.div`
    color: #13bbbb;
    width: 100%;
    height: 100%;

`;