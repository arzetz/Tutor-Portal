import React, {useState, useEffect} from 'react';

import './singleapplication.css';

import { useParams, Link } from 'react-router-dom';
const API_BASE = "http://localhost:1234";

const SingleApplication = () => {

    const [findStudentCards, setCard] = useState([]);
    const [cardDate, setCardDate] = useState("");

    useEffect(() => {
        GetCards();
        console.log(findStudentCards);
    }, [])
  
    const {id} = useParams();

    const GetCards = () => {
        fetch(API_BASE + "/findstudent/" + id)
        .then(res => res.json())
        .then(data => setCard(data))
        .catch(err => console.error(err));
    }

    const makeRequest = async () => {
        const data = await fetch(API_BASE + "/applications", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                category: findStudentCards.category,
                date: cardDate,
                title: findStudentCards.title,
                price: findStudentCards.price,
                description: findStudentCards.description
            })
        }).then(res => res.json());
        console.log(data);
    }
    
    return (
        <section className='singleapplication'>
            <div className='singleapplication__container'>
                <Link to={`/findstudent`} className='singleapplication__title'>Вернуться назад</Link>
                
                <div className='singleapplication__content'>
                    <div className='information__profile'>
                        <img className="information__profile--photo" src={findStudentCards.photo} />
                        <p className='information__profile--username'><span className='orange'>{findStudentCards.name}</span> {findStudentCards.surname}</p>
                        <p className='information__profile--age'>ВОЗРАСТ: {/*user.age*/}</p>
                    </div>
                    <div className='singleapplication__info'>
                        <p className='singleapplication__category'>{findStudentCards.category}</p>
                        <p className='singleapplication__title--title'>{findStudentCards.title}</p>
                        <p className='singleapplication__description--title'>Подробное описание:</p>
                        <text className='singleapplication__description'>{findStudentCards.description}</text>
                        <p className='singleapplication__price--title'>Ставка:</p>
                        <p className='singleapplication__price'>{findStudentCards.price}</p>
                        <form className='otklik-form'>
                        <input placeholder="Предложите свою цену (₽ / час)" className='singleapplication__input'>
                        </input>
                        <input required placeholder="Дата проведения занятия* (ДД.ММ.ГГ)" className='singleapplication__input'
                        onChange={e => setCardDate(e.target.value)}
                        value={cardDate}>
                        </input>
                        <button className='singleapplication__button' onClick={makeRequest}>
                            Откликнуться
                        </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleApplication;