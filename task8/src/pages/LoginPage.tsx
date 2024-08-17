import React from 'react';
import Login from '../components/UserFrom/UserFrom';

const LoginPage: React.FC = () => {
    return (
        <div className='user-form-container'>
            <div className='form-area'>
                <h2 className='form-ttl'>Login</h2>
                <Login userFrom="login" />
            </div>
        </div>
    )
}

export default LoginPage
