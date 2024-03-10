

import React, { useState, useEffect } from 'react';

const API_BASE = "http://localhost:1234";

const Application = ({id, category, title, photo, name, surname, date, price, comment }) => {
    console.log(photo);
    const [isBlockVisible, setIsBlockVisible] = useState(false);
    const [requestCards, setCard] = useState([]);

    useEffect(() => {
        GetCards();
        console.log(requestCards);
    }, [])


    const GetCards = () => {
        fetch(API_BASE + "/applications/" + id)
        .then(res => res.json())
        .then(data => setCard(data))
        .catch(err => console.error(err));
    }

    const confirmRequest = async () => {
        const data = await fetch(API_BASE + "/profile", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                category: requestCards.category,
                title: requestCards.title,
                price: requestCards.price,
                description: requestCards.description
            })
        },
        ).then(res => res.json());
        console.log(data);
        await fetch(API_BASE + "/delete/" + id, {
            method: "DELETE"
       }).then(res => res.json());
    }


    const declineRequest = async () => {
        await fetch(API_BASE + "/delete/" + id, {
            method: "DELETE"
       }).then(res => res.json());
    }

    const toggleBlockVisibility = () => {

        const block = document.querySelector('.applications__block');

        if (isBlockVisible) {
            block.classList.add('reverse__animation-block');
            setTimeout(() => {
                setIsBlockVisible(false);
            }, 500);
        } else {
            setIsBlockVisible(true);
        }
        
    };

    return (
        <>
            <div className='applications__item'>
                <div className="applications__header">
                    <div className="applications__item--info">
                        <p className="application__category">{category}</p>
                        <p className="application__title">{title}</p>
                    </div>
                    <div className='application__buttons'>
                        <button onClick={toggleBlockVisibility} className='application__btn more-btn'>Подробнее</button>
                        <button className='application__btn accept-btn' onClick={confirmRequest}>Принять</button>
                        <button className='application__btn decline-btn' onClick={declineRequest}>Отказаться</button>
                    </div>
                </div>
                {isBlockVisible && (
                    <div className='applications__block'>
                        <div className="applications__zayavka">
                            <div className="zayavka__profile">
                                <img className="zayavka__photo" src={photo}></img>
                                <div className='zayavka__info'>
                                    <p className='information__profile--username'><span className='orange'>{name}</span> {surname}</p>
                                    <p className='task__date'>{date}</p>
                                    <p className='task__cost'>{price}</p>
                                </div>
                            </div>
                            <h3 className='comment__title'>Комментарий пользователя:</h3>
                            <p className='zayavka__comment'>{comment}</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Application;