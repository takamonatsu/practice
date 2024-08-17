import React from 'react';
import { Link } from 'react-router-dom';
import './UserFrom.css';

export interface UserFromProps {
    userFrom: string;
}

const UserFrom: React.FC<UserFromProps> = ({ userFrom }) => {

    return (
        <form action="" className='form'>
            <label htmlFor="" className='label'>
                ユーザー名
                <input type="text" className='input' />
                {/* エラーメッセージ表示 */}
            </label>
            <label htmlFor="" className='label'>
                パスワード
                <input type="password" className='input' />
                {/* エラーメッセージ表示 */}
            </label>
            <div className='form-bottom'>
                <button className='btn'>{userFrom === 'login' ? 'Login' : 'SignUp'}</button>
                <Link to={`/${userFrom === 'login' ? 'signup' : 'login'}`} className='link'>{userFrom === 'login' ? 'SignUp' : 'Login'}</Link>
            </div>
        </form>
    )
}

export default UserFrom