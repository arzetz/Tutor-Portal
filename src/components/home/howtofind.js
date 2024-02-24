import React from 'react';

import '../../css/howtofind.css';
import '../../css/normalize.css';
import '../../css/reset.css';

const Howtofind = () => {
    return (
        <section className='howtofind'>
            <div className='howtofind__container'>
                <h3 className='howtofind__title'>Как найти репетитора для ученика</h3>
                <p className='howtofind__text'><a href="registration.html" className='orange'>Зарегистрируйтесь</a> или <a href="auth.html" className='orange'>авторизуйтесь</a> на сайте, выберите репетитора из списка или создайте заявку в личном кабинете. Опишите свои требования к репетитору и отправьте сообщение-заявку.</p>
            </div>
        </section>
    );
};

export default Howtofind;