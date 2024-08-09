import React, {useState} from 'react';
import './FormValidationApp.css';
// フォームの項目
//  名前（必須）
//  年齢（任意、数値）
//  メールアドレス（必須、正しいメール形式）
//  パスワード（必須、6文字以上）
//  パスワード確認（必須、パスワードを同じ値）
// バリデーションの指定
//  名前: 空でないことを確認
//  年齢: 任意、数値であることを確認
//  メールアドレス: 有効なメール形式であることを確認
//  パスワード: 6文字以上であることを確認
//  パスワード確認: パスワードを同じ値であることを確認

const FormValidationApp: React.FC = () => {
    type User = {
        name: string;
        age: string;
        email: string;
        password: string;
        passwordConfirmation: string;
    }

    const [userData, setUserData] = useState<User>({
        name: '',
        age: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const validateField  = ( name: string, value:string ) => {
        let error = '';
        const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        switch(name) {
            case 'name':
                if(!value.trim()) {
                    error = '名前を入力してください';
                }
                break;
            case 'age':
                if(isNaN(Number(value))) {
                    error = '数字で入力してください';
                }
                break;
            case 'email':
                if(!value.trim()) {
                    error = 'メールアドレスを入力してください';
                } else if(!mailRegex.test(value)) {
                    error = '有効なメールアドレスを入力してください。';
                }
                break;
            case 'password':
                if(!value) {
                    error = 'パスワードを入力してください。';
                } else if(value.length < 6) {
                    error = 'パスワードは6文字以上で入力してください。';
                }
                break;
            case 'passwordConfirmation':
                if(!value) {
                    error = '確認用パスワードを入力してください。';
                } else if(value !== userData.password) {
                    error = 'パスワードと確認用パスワードが一致しません。';
                }
                break;
            default:
                break;
        }

        setErrors(errors => ({...errors, [name]: error}));
    };

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setUserData({...userData, [name]: value});
        validateField (name, value);
    };

    return (
    <div className='form-validation-app'>
      <h2>アカウント情報入力</h2>
      <form action="">
        <ul className='user-list'>
            <li className='user-list-item'>
                <label htmlFor="name">氏名</label>
                <input className={`user-input ${errors.name ? "error": ""}`} type="text" name='name' onChange={onChangeInput} />
                {errors.name && <p className="error-txt ">{errors.name}</p>}
            </li>
            <li className='user-list-item'>
                <label htmlFor="age">年齢</label>
                <input className={`user-input ${errors.age ? "error": ""}`} type="text" name='age' onChange={onChangeInput} />
                {errors.age && <p className="error-txt ">{errors.age}</p>}
            </li>
            <li className='user-list-item'>
                <label htmlFor="email">メールアドレス</label>
                <input className={`user-input ${errors.email ? "error": ""}`} type="text" name='email' onChange={onChangeInput} />
                {errors.email && <p className="error-txt ">{errors.email}</p>}
            </li>
            <li className='user-list-item'>
                <label htmlFor="password">パスワード</label>
                <input className={`user-input ${errors.password ? "error": ""}`} type="password" name='password' onChange={onChangeInput} />
                {errors.password && <p className="error-txt ">{errors.password}</p>}
            </li>
            <li className='user-list-item'>
                <label htmlFor="passwordConfirmation">パスワード確認</label>
                <input className={`user-input ${errors.passwordConfirmation ? "error": ""}`} type="password" name='passwordConfirmation' onChange={onChangeInput} />
                {errors.passwordConfirmation && <p className="error-txt ">{errors.passwordConfirmation}</p>}
            </li>
        </ul>
      </form>
    </div>
  )
}

export default FormValidationApp
