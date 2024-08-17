import React from 'react';
import Login from '../components/UserFrom/UserFrom';
import Header from '../components/Header/Header';

const LoginPage: React.FC = () => {
    return (
        <div>
            <Header />
            <div className='user-form-container'>
                <div className='form-area'>
                    <h2 className='form-ttl'>Login</h2>
                    <Login userFrom="login" />
                </div>
            </div>
        </div>
    )
}

export default LoginPage
