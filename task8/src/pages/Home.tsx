import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Home.css'
import Header from '../components/Header/Header';

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <div className='home-container'>
                <h2 className='home-ttl'>課題8: シンプルなチャットアプリ</h2>
                <div className='home-links'>
                    <Link to='/login' className='btn-login'>Login</Link>
                    <Link to='/signup' className='btn-signup'>SignUp</Link>
                </div>
            </div>
        </div>
    )
}

export default Home
