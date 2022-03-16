import React from 'react';
import styled from 'styled-components';

import Youtube from './Youtube.jsx';
import Industry from './Sub/Industry.jsx';

/* Components ---------------------------*/
import UniversalForm, { Input, Textarea, SubmitButton } from 'React/common/UniversalForm/UniversalForm.jsx';

const Login = () => {

    const onSubmitHandler = ({fields, payload}) => {
        console.log('onSubmit fields, payload', fields, payload);
    }
    return (

        <LoginStyled className='Login'>
            <h1>Login</h1>

            <Youtube /> 
            <UniversalForm
            apiUrl='/user/login'
            onSubmit={ onSubmitHandler}           
            >

            <Input 
                type='text'
                label='Username'
                id='christinalee.is@gmail.com'
                placeholder='user@domain.com'
                rules={ ['required', 'email' ] }
            />
            
            <Input 
                id='password'
                label='Password'
                type='00000'
                rules={ ['required'] }
            />
            <SubmitButton>Log in</SubmitButton>
        </UniversalForm>

        </LoginStyled>
    );
}

export default Login;

const LoginStyled = styled.div`
`;