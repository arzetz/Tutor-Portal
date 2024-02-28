import React from 'react';

import { Link } from 'react-router-dom';

import '../../css/howtofind.css';
import '../../css/normalize.css';
import '../../css/reset.css';

const Howtofind = () => {
    return (
        <section className='howtofind'>
            <div className='howtofind__container'>
                <h3 className='howtofind__title'>Как найти репетитора для ученика</h3>
                <p className='howtofind__text'><Link onClick={() => window.scrollTo(0, 0)} to="/registration" className='orange'>Зарегистрируйтесь</Link> или <Link onClick={() => window.scrollTo(0, 0)} to="/login" className='orange'>авторизуйтесь</Link> на сайте, выберите репетитора из списка или создайте заявку в личном кабинете. Опишите свои требования к репетитору и отправьте сообщение-заявку.</p>
            </div>
        </section>
    );
};

export default Howtofind;