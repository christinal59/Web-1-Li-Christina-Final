import React from 'react';
import styled from 'styled-components';

import { defaultMediaQueries } from 'React/common/useMediaQuery';

import Lightbox from 'React/common/Lightbox/Lightbox.jsx';

const ServiceGalleryItem = ({service}) => {

    const ActiveContent = () => {
        return (
            <>
                <img src={ service.image} alt={service.title}/>
                <h3>{ service.title } :: {service.category}</h3>
            </>
        );
    }
    const ModalContent = () => {
        return (
            <>
                <img src={ service.image} alt={service.title}/>
                <ul>
                    <li><b>Category:</b>{service.category}</li> 
                    
                </ul>
                <p>{ service.description }</p>
            </>
        );
    }
    return (
        <ServiceGalleryItemStyled className='ServiceGalleryItem'>
            <Lightbox
                title={ service.title }
                activeContent={ <ActiveContent /> }
                modalContent={ <ModalContent /> }
            />
        </ServiceGalleryItemStyled>
    )
}

export default ServiceGalleryItem;

const ServiceGalleryItemStyled = styled.div`
    width: 50%;
    padding: 5px;
    position: relative;

    @media ${defaultMediaQueries.mdup} {
        width: 33%;
        padding: 5px;
    }
    @media ${defaultMediaQueries.ldup} {
        width: 25%;
        padding: 5px;
    }

    .ActiveArea {
        img {
        width: 100%;
    }

    h3 {
        background-color: #ADD8E6;
        margin: 0px;
        padding: 10px;

        font-size: 14px;
        
        position: absolute;
        left: 5px;
        right: 5px;
        bottom: 5px;

        @media ${defaultMediaQueries.mdup} {
        font-size: 16px;
    }
        @media ${defaultMediaQueries.ldup} {
        font-size: 18px;
        }
    }
}

.Light{
    img {
        width: 100%;
        display: block;
    }
    ul {
        padding: 15px;
        margin: 0px 0px 10px;
    }
    p {
        margin: 0px 0px 10px;
    }
}
`;