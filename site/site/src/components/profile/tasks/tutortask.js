import chatphoto from '../../../images/krestik.png';

import { useState } from 'react';

const TutorTaskItem = ({category, title,name,surname,price,date,status,photo}) => {
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
                <p className='task__category'>{category}</p>
                <p className='task__title'>{title}</p>
                <p className='task__cost'>{price}</p>
                <p className='task__date'>{date}</p>
                <div className='task__user'>
                    <img src={photo} className="task__photo" alt="User" />
                    <p className='task__username'><span className='orange'>{name}</span> {surname}</p>
                </div>
                <p className='task__status'>{status}</p>
            </li>
            {showChat && (
                <>
                <div onClick={toggleChat} className='overlay'></div>
                <div className='chat'>
                    <div className='chat__left'>
                        <div className='chat__header'>
                            {name + ' '+  surname}
                        </div>
                        <input  placeholder='Написать сообщение..' className='chat__footer'>

                        </input>
                    </div>
                    <div className='chat__right'>
                        <img src={chatphoto} onClick={toggleChat} className='exit-button'>

                        </img>
                        <p className='chat__category'>
                            {category}
                        </p>
                        <p className='chat__title'>
                            {title}
                        </p>
                        <p className='chat__price orange'>
                            {price}
                        </p>
                        <p className='chat__date'>
                            {date}
                        </p>
                        <a className='video' href='https://meet.jit.si/моймужджорджбуш234'>
                            ПОДКЛЮЧИТЬСЯ К ВИДЕОКОНФЕРЕНЦИИ
                        </a>
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

export default TutorTaskItem;