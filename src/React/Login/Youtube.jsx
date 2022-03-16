import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';


const Youtube = () => {

    return (
        <YoutubeStyled>
            <ReactPlayer className='youtube' url='https://www.youtube.com/watch?v=tbA-CJu08Z0'/>
        </YoutubeStyled>
    );
}

export default Youtube;

const YoutubeStyled = styled.div`
    .youtube {
        margin: 20px auto;
    }
`;