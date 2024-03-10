import React from 'react';
import { useState, useEffect} from 'react';

import '../createtask/createtask.css';

const API_BASE = "http://localhost:1234";

const CreateResume = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMethodDropdownOpen, setIsMethodDropdownOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleMethodDropdown = () => {
        setIsMethodDropdownOpen(!isMethodDropdownOpen);
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setIsDropdownOpen(false);
    };

    const handlePaymentMethodClick = (method) => {
        setSelectedPaymentMethod(method);
        setIsMethodDropdownOpen(false);
    };

    const [cardName, setCardName] = useState("");
    const [cardPrice, setCardPrice] = useState("");
    const [cardDescription, setCardDescription] = useState("");
    const [cards, setCard] = useState([]);
    
    useEffect(() => {
        GetCards();
        console.log(cards);
    }, [])

    

    const GetCards = () => {
        fetch(API_BASE + "/findstudent")
        .then(res => res.json())
        .then(data => setCard(data))
        .catch(err => console.error(err));
    }

    const AddCard = async () => {
        const data = await fetch(API_BASE + "/findtutor", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                category: selectedCategory,
                title: cardName,
                price: cardPrice,
                description: cardDescription
            })
        }).then(res => res.json());
        console.log(data);
    }

    return (
        <section className='createtask'>
            <div className='createtask__container'>
                <h1 className='createtask__title'>Создание резюме</h1>
                <div className='createtask__content'>
                    <form >
                        <ul className='createtask__inputs'>
                            <li className='createtask__inputs--item'>
                                <label className='editing__label'>Название резюме: </label>
                                <input required placeholder="Введите название" className='createtask__input'
                                onChange={e => setCardName(e.target.value)}
                                value={cardName}></input>
                            </li>
                            <li className='createtask__inputs--item'>
                                <label className='editing__label'>Категория: </label>
                                <input 
                                    placeholder="Выберите категорию" 
                                    className='createtask__input input__category' 
                                    onClick={toggleDropdown}
                                    readOnly
                                    value={selectedCategory}
                                    required
                                />
                                {isDropdownOpen && (
                                    <ul className='createtask__category--burger'>
                                        <li className='category__item' onClick={() => handleCategoryClick('')}>- Не выбрано -</li>
                                        <li className='category__item' onClick={() => handleCategoryClick('Иностранные языки')}>Иностранные языки</li>
                                        <li className='category__item' onClick={() => handleCategoryClick('Математика')}>Математика</li>
                                        <li className='category__item' onClick={() => handleCategoryClick('Русский язык')}>Русский язык</li>
                                        <li className='category__item' onClick={() => handleCategoryClick('Литература')}>Литература</li>
                                        <li className='category__item' onClick={() => handleCategoryClick('Программирование')}>Программирование</li>
                                        <li className='category__item' onClick={() => handleCategoryClick('География')}>География</li>
                                        <li className='category__item' onClick={() => handleCategoryClick('Биология')}>Биология</li>
                                        <li className='category__item' onClick={() => handleCategoryClick('Физика')}>Физика</li>
                                        <li className='category__item' onClick={() => handleCategoryClick('Химия')}>Химия</li>
                                        <li className='category__item' onClick={() => handleCategoryClick('Информатика')}>Информатика</li>
                                        <li className='category__item' onClick={() => handleCategoryClick('Экономика')}>Экономика</li>
                                    </ul>
                                )}
                            </li>
                                <li className='createtask__payment--item'>
                                    <label  className='editing__label'>Бюджет (₽ / час): </label>
                                    <input required placeholder="Введите бюджет" className='createtask__input'
                                    onChange={e => setCardPrice(e.target.value)}
                                    value={cardPrice}></input>
                                </li>
                                <li className='createtask__inputs--item'>
                                    <label className='editing__label'>Способ оплаты: </label>
                                    <input 
                                        placeholder="Выберите способ оплаты" 
                                        className='createtask__input input__method' 
                                        onClick={toggleMethodDropdown}
                                        readOnly
                                        value={selectedPaymentMethod}
                                        required
                                    />
                                    {isMethodDropdownOpen && (
                                    <ul className='createtask__category--burger'>
                                        <li className='category__item' onClick={() => handlePaymentMethodClick('')}>- Не выбрано -</li>
                                        <li className='category__item' onClick={() => handlePaymentMethodClick('Банковская карта')}>Банковская карта</li>
                                        <li className='category__item' onClick={() => handlePaymentMethodClick('Электронный кошелёк')}>Электронный кошелёк</li>

                                    </ul>
                                    )}
                                </li>
                        </ul>
                        
                        <div className='createtask__about'>
                            <label  className='editing__label'>Подробное описание: </label>
                            <textarea placeholder="Введите описание" className='createtask__textarea'onChange={e => setCardDescription(e.target.value)}
                            value={cardDescription}></textarea>
                        </div>
                        <button type="submit" className="createtask__button" onClick={AddCard}>ОПУБЛИКОВАТЬ РЕЗЮМЕ</button>
                    </form>
                </div>
            </div>

        </section>
    );
};

export default CreateResume;