import React from 'react';
import { useState, useEffect } from 'react';

import './Applications.css';

import Application from './Application_item';

const API_BASE = "http://localhost:1234";

const Editblock = () => {

    const [requestCards, setCard] = useState([]);

    useEffect(() => {
        GetCards();
        console.log(requestCards);
    }, [])

    const GetCards = () => {
        fetch(API_BASE + "/applications")
        .then(res => res.json())
        .then(data => setCard(data))
        .catch(err => console.error(err));
    }

    return (
        <section className='applications'>
            <div className='applications__container'>
                <h1 className='applications__title'>Заявки</h1>
                <ul className='applications__content'>
                    {requestCards.map((card) => {
                        return <Application id = {card._id} category={card.category} title={card.title} photo={card.photo}
                        name={"Имя"} surname={"Фамилия"} date={'10'} price={card.price}
                        comment={card.description}/>
                    })}
                </ul>
            </div>
        </section>
    );
};

export default Editblock;