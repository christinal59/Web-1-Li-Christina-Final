import React from 'react';
import styled from 'styled-components';

import SunAndMoon from './SunAndMoon.jsx';
import Essays from './Essays/Essays.jsx'
import ControlledInput from './ControlledInput.jsx';

const Homework = () => {
    return (
        <HomeworkStyled>
            <h1>Homework</h1>
            <SunAndMoon/>
            <ControlledInput />
            <Essays/>
        </HomeworkStyled>
    )
}

export default Homework;

const HomeworkStyled = styled.div`
`;