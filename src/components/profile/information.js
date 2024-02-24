import React from 'react';

import './information.css';

import {Link} from 'react-router-dom';

const Information = () => {
    return (
        <>
        <section className='information'>
                <h1 className='information__title'>Личный кабинет</h1>
                <div className='information__container'>
                    <div className='information__about'>
                        <h3 className='information__about--title'>ИНФОРМАЦИЯ О ПОЛЬЗОВАТЕЛЕ</h3>
                        <p className='information__about--text'>
                        Привет! Меня зовут Мякотных Сергей и я - страстный почитатель знаний и постоянный искатель новых горизонтов. Увлеченный ученик, я стремлюсь к постоянному саморазвитию и расширению своих горизонтов в различных областях знаний. Моя любовь к обучению привела меня на этот портал, где я активно исследую различные предметы и учусь новым навыкам. В мире знаний я нахожу вдохновение и радость, и я с нетерпением жду возможности поделиться своими знаниями и узнать что-то новое от других участников сообщества. Буду рад познакомиться с вами и обмениваться знаниями и идеями. Давайте вместе сделаем наше обучение настоящим приключением!
                        </p>
                        <Link onClick={() => window.scrollTo(0, 0)} to="/edit" className='information__about--button'>РЕДАКТИРОВАТЬ ПРОФИЛЬ</Link>

                    </div>
                    <div className='information__profile'>
                        <img className="information__profile--photo" src={require('../../images/user.jpg')} />
                        <p className='information__profile--username'><span className='orange'>СЕРГЕЙ</span> МЯКОТНЫХ</p>
                        <p className='information__profile--age'>ВОЗРАСТ: 19</p>
                    </div>
                </div>
        </section>
        </>
    );
};

export default Information;