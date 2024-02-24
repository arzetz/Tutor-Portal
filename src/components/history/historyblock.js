import React from 'react';

import './history.css';

const History = () => {
    return (
        <section className='history'>
            <div className='history__container'>
                <h1 className='history__title'>История платежей</h1>
                <div className='history__content'>
                    <ul className='history__header'>
                        <li className='history__header--item'>ДАТА</li>
                        <li className='history__header--item'>СУММА</li>
                        <li className='history__header--item'>ТИП ОПЕРАЦИИ</li>
                        <li className='history__header--item'>СПОСОБ ОПЛАТЫ</li>
                    </ul>
                    <ul className='history__list'>
                        <li className='history__list--item'>
                            <p className='history__list--date history__item'>15.02.2024</p>
                            <p className='history__list--sum history__item green'>+ 5 000 ₽</p>
                            <p className='history__list--operation history__item'>ПОПОЛНЕНИЕ</p>
                            <p className='history__list--replanishment history__item'>БАНКОВСКАЯ КАРТА</p>
                        </li>
                        <li className='history__list--item'>
                            <p className='history__list--date history__item'>25.02.2024</p>
                            <p className='history__list--sum history__item orange'>- 1 000 ₽</p>
                            <p className='history__list--operation history__item'>ОПЛАТА УРОКА</p>
                            <p className='history__list--replanishment history__item'>БАНКОВСКАЯ КАРТА</p>
                        </li>
                        <li className='history__list--item'>
                            <p className='history__list--date history__item'>01.01.2001</p>
                            <p className='history__list--sum history__item green'>+ 3 500 ₽</p>
                            <p className='history__list--operation history__item'>ПОПОЛНЕНИЕ</p>
                            <p className='history__list--replanishment history__item'>БАНКОВСКАЯ КАРТА</p>
                        </li>
                        <li className='history__list--item'>
                            <p className='history__list--date history__item'>15.02.2024</p>
                            <p className='history__list--sum history__item green'>+ 2 000 ₽</p>
                            <p className='history__list--operation history__item'>ПОПОЛНЕНИЕ</p>
                            <p className='history__list--replanishment history__item'>БАНКОВСКАЯ КАРТА</p>
                        </li>
                        <li className='history__list--item'>
                            <p className='history__list--date history__item'>15.02.2024</p>
                            <p className='history__list--sum history__item orange'>- 25 000 ₽</p>
                            <p className='history__list--operation history__item'>ВЫВОД</p>
                            <p className='history__list--replanishment history__item'>БАНКОВСКАЯ КАРТА</p>
                        </li>
                        <li className='history__list--item'>
                            <p className='history__list--date history__item'>15.02.2024</p>
                            <p className='history__list--sum history__item green'>+ 5 000 ₽</p>
                            <p className='history__list--operation history__item'>ПОПОЛНЕНИЕ</p>
                            <p className='history__list--replanishment history__item'>БАНКОВСКАЯ КАРТА</p>
                        </li>
                        <li className='history__list--item'>
                            <p className='history__list--date history__item'>15.02.2024</p>
                            <p className='history__list--sum history__item green'>+ 5 000 ₽</p>
                            <p className='history__list--operation history__item'>ПОПОЛНЕНИЕ</p>
                            <p className='history__list--replanishment history__item'>БАНКОВСКАЯ КАРТА</p>
                        </li>
                        <li className='history__list--item'>
                            <p className='history__list--date history__item'>15.02.2024</p>
                            <p className='history__list--sum history__item green'>+ 5 000 ₽</p>
                            <p className='history__list--operation history__item'>ПОПОЛНЕНИЕ</p>
                            <p className='history__list--replanishment history__item'>БАНКОВСКАЯ КАРТА</p>
                        </li>
                        <li className='history__list--item'>
                            <p className='history__list--date history__item'>15.02.2024</p>
                            <p className='history__list--sum history__item orange'>- 2 000 ₽</p>
                            <p className='history__list--operation history__item'>ОПЛАТА УРОКА</p>
                            <p className='history__list--replanishment history__item'>БАНКОВСКАЯ КАРТА</p>
                        </li>
                        <li className='history__list--item'>
                            <p className='history__list--date history__item'>15.02.2024</p>
                            <p className='history__list--sum history__item orange'>- 2 000 ₽</p>
                            <p className='history__list--operation history__item'>ОПЛАТА УРОКА</p>
                            <p className='history__list--replanishment history__item'>БАНКОВСКАЯ КАРТА</p>
                        </li>
                    </ul>
                </div>
            </div>

        </section>
    );
};

export default History;