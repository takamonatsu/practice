import React from 'react';
import './Login.css';

const Login: React.FC = () => {
    return (
        <div className='login-component'>
            <div className='login-form-area'>
                <form action="" className='login-form'>
                    <label htmlFor="" className='login-label'>
                        ユーザー名
                        <input type="text" className='login-input' />
                        {/* エラーメッセージ表示 */}
                    </label>
                    <label htmlFor="" className='login-label'>
                        パスワード
                        <input type="password" className='login-input' />
                        {/* エラーメッセージ表示 */}
                    </label>
                    <div className='form-bottom'>
                        <button className='login-btn'>Login</button>
                        <a href="" className='login-link'>Signup</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login