import React from 'react';

import './form.css';

const Form = () => {

    return (
        <>
        <section className='form'>
            <div className='form__container'>
                <div className='form__content'>
                    <h1 className='form__title'>Регистрация</h1>
                    <form>
                        <ul className='form__inputs'>
                            <li className='form__inputs--item'>
                                <label className='form__inputs--label'>Имя пользователя</label>
                                <input required placeholder=" " type="text" className='form__inputs--input'></input>
                            </li>
                            <li className='form__inputs--item'>
                                <label className='form__inputs--label'>E-mail</label>
                                <input required placeholder=" " type="email" className='form__inputs--input'></input>
                            </li>
                            <li className='form__inputs--item'>
                                <label className='form__inputs--label'>Фамилия пользователя</label>
                                <input required placeholder=" " type="text" className='form__inputs--input'></input>
                            </li>
                            <li className='form__inputs--item'>
                                <label className='form__inputs--label'>Номер телефона</label>
                                <input required placeholder=" " type="tel" className='form__inputs--input'></input>
                            </li>
                            <li className='form__inputs--item'>
                                <label className='form__inputs--label'>Пароль</label>
                                <input required placeholder=" " type="password" className='form__inputs--input'></input>
                            </li>
                            <li className='form__inputs--item'>
                                <label className='form__inputs--label'>Повторите пароль</label>
                                <input required placeholder=" " type="password" className='form__inputs--input'></input>
                            </li>
                            <div className='form__inputs--checkbox'>
                                <input required type="checkbox"></input>
                                <p className='form__checkbox'>Нажимая на кнопку, я соглашаюсь на <span className='orange'>обработку персональных данных</span></p>
                            </div>
                            <li className='form__inputs--item'>
                                <button className='form__button'>
                                    ЗАРЕГИСТРИРОВАТЬСЯ
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