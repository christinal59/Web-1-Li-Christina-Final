import React from 'react';
import styled from 'styled-components';

const SiteTitle = () => {

    return (
        <SiteTitleStyled className='SiteTitle'>
            <h2> Christina Li </h2>
            <h3>Graphic Designer</h3>
        </SiteTitleStyled>
    );
}

export default SiteTitle;

const SiteTitleStyled = styled.div`
    color: #064c4c;
    text-align: left;

    h2 {
        margin: 0px;
        font-size: 40px;
    }

    h3 {
        margin: 0px;
        font-size: 20px;
    }
    
`;