import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import UniversalForm, { Input, Textarea, SubmitButton } from 'React/common/UniversalForm/UniversalForm.jsx';

const Login = () => {

    const onSubmitHandler = ({fields, payload}) => {
        console.log('onSubmit fields, payload', fields, payload);
    }
    return (

        <LoginStyled className='Login'>
            <iframe width="420" height="315"  
            src="https://www.youtube.com/watch?v=tbA-CJu08Z0">
            </iframe>
            
            <h1>Login</h1> 
            <UniversalForm
            apiUrl='/user/login'
            onSubmit={ onSubmitHandler}           
            >

            <Input 
                type='text'
                label='Username'
                id='username'
                placeholder='user@domain.com'
                rules={ ['required', 'email' ] }
            />
            
            <Input 
                id='password'
                label='Password'
                type='password'
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