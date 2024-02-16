import React from 'react';

import './auth.css';

import {Link} from 'react-router-dom';

const Form = () => {

    return (
        <>
        <section className='auth'>
            <div className='auth__container'>
                <div className='auth__content'>
                    <h1 className='auth__title'>Авторизация</h1>
                    <form>
                        <ul className='auth__inputs'>
                            <li className='auth__inputs--item'>
                                <label className='auth__inputs--label'>E-mail</label>
                                <input required placeholder=" " type="email" className='auth__inputs--input'></input>
                            </li>
                            <li className='auth__inputs--item'>
                                <label className='auth__inputs--label'>Пароль</label>
                                <input required placeholder=" " type="password" className='auth__inputs--input'></input>
                            </li>
                            <div className='auth__inputs--recovery'>
                                <Link to="/recovery" className='auth__recovery'>Забыли пароль?</Link>
                            </div>
                            <li className='auth__inputs--item'>
                                <button className='auth__button'>
                                    ВОЙТИ
                                </button>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </section>
        </>
    );
};

export default Form;