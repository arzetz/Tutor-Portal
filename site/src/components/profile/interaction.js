import React from 'react';
import {useState} from 'react';

import chatphoto from '../../images/krestik.svg';

import './interaction.css';

import {Link} from 'react-router-dom';

const TutorTaskItem = ({ userID }) => {
    const [showChat, setShowChat] = useState(false);

    const toggleChat = () => {
        const chatElement = document.querySelector('.chat');
        const overlayElement = document.querySelector('.overlay');
        if (showChat) {
            chatElement.classList.add('reverse-animation');
            overlayElement.classList.add('reverse-animation');
            setTimeout(() => {
                setShowChat(false);
            }, 500);
        } else {
            setShowChat(true);
        }
    };

    return (
        <div className='tutor-task-item'>
            <li className='interaction__tasks--item' onClick={toggleChat}>
                <p className='task__category'>Иностранные языки</p>
                <p className='task__title'>Репетитор по английскому языку</p>
                <p className='task__cost'>7 000 ₽</p>
                <p className='task__date'>13.02.2024 - 20.02.2024</p>
                <div className='task__user'>
                    <img className="task__photo" src={require('../../images/user.jpg')} alt="User" />
                    <p className='task__username'><span className='orange'>СЕРГЕЙ</span> МЯКОТНЫХ</p>
                </div>
                <p className='task__status'>Активно</p>
            </li>
            {showChat && (
                <>
                <div onClick={toggleChat} className='overlay'></div>
                <div className='chat'>
                    <div className='chat__left'>
                        <div className='chat__header'>
                            Мякотных Сергей
                        </div>
                        <input  placeholder='Написать сообщение..' className='chat__footer'>

                        </input>
                    </div>
                    <div className='chat__right'>
                        <img src={chatphoto} onClick={toggleChat} className='exit-button'>

                        </img>
                        <p className='chat__category'>
                            Программирование
                        </p>
                        <p className='chat__title'>
                            Репетитор по фронтенд-разработке
                        </p>
                        <p className='chat__price orange'>
                            1 000 ₽ / час
                        </p>
                        <p className='chat__date'>
                            13.02.2024
                        </p>
                        <button className='video'>
                            ПОДКЛЮЧИТЬСЯ К ВИДЕОКОНФЕРЕНЦИИ
                        </button>
                        <button className='complete'>
                            ЗАВЕРШИТЬ ЗАНЯТИЕ
                        </button>
                    </div>
                </div>
                </>
            )}
        </div>
    );
};

const StudentTaskItem = ({ userID }) => {
    const [showChat, setShowChat] = useState(false);

    const toggleChat = () => {
        const chatElement = document.querySelector('.chat');
        const overlayElement = document.querySelector('.overlay');
        if (showChat) {
            chatElement.classList.add('reverse-animation');
            overlayElement.classList.add('reverse-animation');
            setTimeout(() => {
                setShowChat(false);
            }, 500);
        } else {
            setShowChat(true);
        }
    };

    return (
        <div className='student-task-item'>
                <li className='interaction__tasks--item' onClick={toggleChat} >
                <p className='task__category'>Программирование</p>
                <p className='task__title'>Репетитор по фронтенд-разработке</p>
                <p className='task__cost'>1 000 ₽ / час</p>
                <p className='task__date'>13.02.2024 - 20.02.2024</p>
                <div className='task__user'>
                    <img className="task__photo" src={require('../../images/user.jpg')} />
                    <p className='task__username'><span className='orange'>СЕРГЕЙ</span> МЯКОТНЫХ</p>
                </div>
                <p className='task__status'>Активно</p>
                </li>
                {showChat && (
                <>
                <div onClick={toggleChat} className='overlay'></div>
                <div className='chat'>
                    Чат с пользователем (UserID: {userID})
                </div>
                </>
            )}
        </div>
    );
};


const Interaction = () => {

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <>
        <section className='interaction'>
            <div className='interaction__container'>
                <div className='interaction__container--left'>
                    <div className='interaction__balance'>
                        <p className='interaction__balance--info'>БАЛАНС: <span className='orange'>30 000 ₽</span></p>
                        <Link to="deposit" className='interaction__deposit'>ПОПОЛНИТЬ</Link>
                        <Link to="withdraw" className='interaction__withdraw'>ВЫВЕСТИ</Link>
                        <Link onClick={() => window.scrollTo(0, 0)} to="/history" className='interaction__link orange'>ИСТОРИЯ ПЛАТЕЖЕЙ</Link>
                        <Link to="support" className='interaction__link black'>ОБРАТИТЬСЯ В ПОДДЕРЖКУ</Link>
                    </div>
                    <div className='interaction__buttons'>
                        <Link onClcik={() => window.scrollTo(0,0)} to="/applications" className='interaction__buttons--btn'>ЗАЯВКИ</Link>
                        <Link onClick={() => window.scrollTo(0, 0)} to="/createtask" className='interaction__buttons--btn'>СОЗДАТЬ<span className='orange'>ЗАНЯТИЕ</span></Link>
                        <Link onClick={() => window.scrollTo(0, 0)} to="/createresume" className='interaction__buttons--btn'>СОЗДАТЬ<span className='orange'>РЕЗЮМЕ</span></Link>
                    </div>
                </div>
                <div className='interaction__container--right'>
                    <div className='interaction__container--title'>
                        <h3 className='interaction__title'>МОНИТОРИНГ ЗАНЯТИЙ</h3>
                        
                            <label className='interaction__role'>
                                <input 
                                    type="checkbox" 
                                    id="roleCheckbox" 
                                    className='role__checkbox' 
                                    checked={isChecked} 
                                    onChange={handleCheckboxChange}
                                />
                                <span className={`role__button ${isChecked ? 'checked' : ''}`} />
                                <p className='role__user'>Я РЕПЕТИТОР</p>
                                <p className='role__user'>Я УЧЕНИК</p>
                             </label>
                    </div>
                    
                    <ul className={`interaction__tasks--tutor ${isChecked ? 'hidden' : 'shown'}`}>
                        <TutorTaskItem userID="1" />
                        <TutorTaskItem userID="2" />
                        <TutorTaskItem userID="3" />
                        <TutorTaskItem userID="4" />
                        <TutorTaskItem userID="5" />
                        <TutorTaskItem userID="6" />
                    </ul>










                    <ul className={`interaction__tasks--student ${isChecked ? 'shown' : 'hidden'}`}>
                    <StudentTaskItem userID="10" />
                    <StudentTaskItem userID="11" />
                    <StudentTaskItem userID="12" />
                    <StudentTaskItem userID="13" />
                    <StudentTaskItem userID="14" />
                    <StudentTaskItem userID="15" />

                    </ul>
                </div>
            </div>
        </section>
        </>
    );
};

export default Interaction;