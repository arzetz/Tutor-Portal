import React from 'react';

import './editblock.css';

import {Link} from 'react-router-dom';

const Editblock = () => {
    return (
        <section className='edit'>
            <div className='edit__container'>
                <h1 className='edit__title'>Редактирование профиля</h1>
                <div className='edit__content'>
                    <div className='edit__profile'>
                        <img className="edit__profile--photo" src={require('../../images/user.jpg')} />
                        <p className='edit__profile--username'><span className='orange'>СЕРГЕЙ</span> МЯКОТНЫХ</p>
                        <p className='edit__profile--age'>ВОЗРАСТ: 19</p>
                        <a className='edit__profile--newphoto'>ЗАГРУЗИТЬ ФОТО</a>
                    </div>
                    <div className='edit__editing'>
                        <form>
                            <ul className='editing__inputs'>
                                <li className='editing__inputs--item'>
                                    <label className='editing__label'>Имя:</label>
                                    <input type="text" placeholder="Введите имя" required defaultValue="Сергей" className='editing__input'></input>
                                </li>
                                <li className='editing__inputs--item'>
                                    <label className='editing__label'>E-mail:</label>
                                    <input type="email" placeholder="Введите E-mail" required defaultValue="keeqocontact@gmail.com" className='editing__input'></input>
                                </li>
                                <li className='editing__inputs--item'>
                                    <label className='editing__label'>Фамилия:</label>
                                    <input type="text" placeholder="Введите фамилию" required defaultValue="Мякотных" className='editing__input'></input>
                                </li>
                                <li className='editing__inputs--item'>
                                    <label className='editing__label'>Телефон:</label>
                                    <input type="tel" placeholder="Введите номер телефона" required minLength={11} defaultValue="89999292879" className='editing__input'></input>
                                </li>
                                <li className='editing__inputs--item'>
                                    <label className='editing__label'>Город: :</label>
                                    <input type="text" placeholder="Введите город" className='editing__input'></input>
                                </li>
                                <li className='editing__inputs--item'>
                                    <label className='editing__label'>Дата рождения:</label>
                                    <input type="text" placeholder="Введите дату рождения" defaultValue="15.02.2024" className='editing__input'></input>
                                </li>
                                <li className='editing__inputs--item'>
                                    <label className='editing__label'>Введите старый пароль:</label>
                                    <input type="password" placeholder="Введите пароль" className='editing__input'></input>
                                </li>
                                <li className='editing__inputs--item'>
                                    <label className='editing__label'>Введите новый пароль:</label>
                                    <input type="password" placeholder="Введите пароль" className='editing__input'></input>
                                </li>
                            </ul>
                            <div className='editing__about'>
                                <label className='editing__label'>Обо мне:</label>
                                <textarea placeholder='Введите информацию о себе' defaultValue="Меня зовут Мякотных Сергей и я - страстный почитатель знаний и постоянный искатель новых горизонтов. Увлеченный ученик, я стремлюсь к постоянному саморазвитию и расширению своих горизонтов в различных областях знаний.
Моя любовь к обучению привела меня на этот портал, где я активно исследую различные предметы и учусь новым навыкам. В мире знаний я нахожу вдохновение и радость, и я с нетерпением жду возможности поделиться своими знаниями и узнать что-то новое от других участников сообщества.
Буду рад познакомиться с вами и обмениваться знаниями и идеями. Давайте вместе сделаем наше обучение настоящим приключением!" className='editing__textarea'></textarea>
                            </div>
                            <div className='edit__buttons'>
                                <Link onClick={() => window.scrollTo(0, 0)} to="/Profile" className='edit__button--back'>ВЕРНУТЬСЯ НАЗАД</Link>
                                <button type="submit" className='edit__button--submit'>СОХРАНИТЬ ИЗМЕНЕНИЯ</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Editblock;