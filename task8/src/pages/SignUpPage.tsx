import React from 'react';
import SignUp from '../components/UserFrom/UserFrom';
import Header from '../components/Header/Header';

const SignUpPage: React.FC = () => {
    return (
        <div>
            <Header />
            <div className='user-form-container'>
                <div className='form-area'>
                    <h2 className='form-ttl'>SignUp</h2>
                    <SignUp userFrom='signup' />
                </div>
            </div>
        </div>
    )
}

export default SignUpPage
