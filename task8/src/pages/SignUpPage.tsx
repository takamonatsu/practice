import React from 'react';
import SignUp from '../components/UserFrom/UserFrom';

const SignUpPage: React.FC = () => {
    return (
        <div className='user-form-container'>
            <div className='form-area'>
                <h2 className='form-ttl'>SignUp</h2>
                <SignUp userFrom='signup' />
            </div>
        </div>
    )
}

export default SignUpPage
