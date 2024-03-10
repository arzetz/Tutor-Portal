import React from 'react';
import {useState, useEffect} from 'react';

import './interaction.css';
import TutorTaskItem from './tasks/tutortask';
import StudentTaskItem from './tasks/studenttask';

import {Link} from 'react-router-dom';

const API_BASE = "http://localhost:1234";


const Interaction = () => {

    const [isChecked, setIsChecked] = useState(false);
    const [confirmedCards, setCard] = useState([]);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    useEffect(() => {
        GetCards();
        console.log(confirmedCards);
    }, [])
    
    const GetCards = () => {
        fetch(API_BASE + "/profile")
        .then(res => res.json())
        .then(data => setCard(data))
        .catch(err => console.error(err));
    }

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
                        <Link onClcik={() => window.scrollTo(0, 0)} to="/applications" className='interaction__buttons--btn'>ЗАЯВКИ</Link>
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
                        {confirmedCards.map((card) => {
                            return <TutorTaskItem category={card.category} title={card.title}
                            name={card.name} surname={card.surname} date={card.date}
                            price={card.price} photo={card.photo} />
                         })}
                    </ul>










                    <ul className={`interaction__tasks--student ${isChecked ? 'shown' : 'hidden'}`}>
                         {confirmedCards.map((card) => {
                            return <StudentTaskItem category={card.category} title={card.title}
                            name={card.name} surname={card.surname} date={card.date}
                            price={card.price} photo={card.photo} />
                         })}

                    </ul>
                </div>
            </div>
        </section>
        </>
    );
};

export default Interaction;