import React from 'react';
import styled from 'styled-components';

const SiteTitle = () => {

    return (
        <SiteTitleStyled className='SiteTitle'>
            <h2>Christina Li :: Graphic Designer</h2>
            <div className="copyright">&copy; 2022. All right reserved.</div>
        </SiteTitleStyled>
    );
}

export default SiteTitle;

const SiteTitleStyled = styled.div`
    h2 {
        margin: 5px 0px;
        font-size: 14px;
        color: black;
    }
    .copyright {
        font-size: 14px;
        color: black;
    }
`;