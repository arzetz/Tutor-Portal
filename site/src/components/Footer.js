import React from 'react';

import '../css/footer.css';
import '../css/normalize.css';
import '../css/reset.css';

import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__container'>
                <ul className='footer__menu'>
                    <li className='footer__menu--column'>
                        <Link href="#" className='footer__menu--link'>ЧАСТЫЕ ВОПРОСЫ</Link>
                        <Link href="#" className='footer__menu--link'>СЛУЖБА ПОДДЕРЖКИ</Link>
                        <Link href="#" className='footer__menu--link'>КОНТАКТЫ</Link>
                    </li>
                    <li className='footer__menu--column'>
                        <Link onClick={() => window.scrollTo(0, 0)} to="/" className='footer__menu--link'>ГЛАВНАЯ СТРАНИЦА</Link>
                        <Link href="Findtutor" className='footer__menu--link'>НАЙТИ РЕПЕТИТОРА</Link>
                        <Link href="Findstudent" className='footer__menu--link'>НАЙТИ УЧЕНИКА</Link>
                    </li>
                    <li className='footer__menu--column'>
                            <Link onClick={() => window.scrollTo(0, 0)} to="/profile" className='footer__menu--link'>ЛИЧНЫЙ КАБИНЕТ</Link>
                        <Link href="Reviews" className='footer__menu--link'>ОТЗЫВЫ</Link>
                    </li>
                    <li className='footer__menu--column'>
                        <Link className='footer__logo' href="index.html">
                            <img className='footer__logo--icon' src={require('../icons/logo.png')} />
                            <p className='footer__logo--title'>Навигатор обучения</p>
                        </Link>
                        <Link href="#" className='footer__rules'>© keeq0.ru / Правила сервиса</Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
;}

export default Footer;