import React from 'react';
import {useState} from 'react';

import './interaction.css';
import {Link} from 'react-router-dom';

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
                        <li className='interaction__tasks--item'>
                            <p className='task__category'>Иностранные языки</p>
                            <p className='task__title'>Репетитор по английскому языку</p>
                            <p className='task__cost'>7 000 ₽</p>
                            <p className='task__date'>13.02.2024 - 20.02.2024</p>
                            <div className='task__user'>
                                <img className="task__photo" src={require('../../images/user.jpg')} />
                                <p className='task__username'><span className='orange'>СЕРГЕЙ</span> МЯКОТНЫХ</p>
                            </div>
                            <button className='task__button'>Завершить</button>
                        </li>
                        <li className='interaction__tasks--item'>
                            <p className='task__category'>Иностранные языки</p>
                            <p className='task__title'>Репетитор по английскому языку</p>
                            <p className='task__cost'>7 000 ₽</p>
                            <p className='task__date'>13.02.2024 - 20.02.2024</p>
                            <div className='task__user'>
                                <img className="task__photo" src={require('../../images/user.jpg')} />
                                <p className='task__username'><span className='orange'>СЕРГЕЙ</span> МЯКОТНЫХ</p>
                            </div>
                            <button className='task__button'>Завершить</button>
                        </li>
                        <li className='interaction__tasks--item'>
                            <p className='task__category'>Иностранные языки</p>
                            <p className='task__title'>Репетитор по английскому языку</p>
                            <p className='task__cost'>7 000 ₽</p>
                            <p className='task__date'>13.02.2024 - 20.02.2024</p>
                            <div className='task__user'>
                                <img className="task__photo" src={require('../../images/user.jpg')} />
                                <p className='task__username'><span className='orange'>СЕРГЕЙ</span> МЯКОТНЫХ</p>
                            </div>
                            <button className='task__button'>Завершить</button>
                        </li>
                        <li className='interaction__tasks--item'>
                            <p className='task__category'>Иностранные языки</p>
                            <p className='task__title'>Репетитор по английскому языку</p>
                            <p className='task__cost'>7 000 ₽</p>
                            <p className='task__date'>13.02.2024 - 20.02.2024</p>
                            <div className='task__user'>
                                <img className="task__photo" src={require('../../images/user.jpg')} />
                                <p className='task__username'><span className='orange'>СЕРГЕЙ</span> МЯКОТНЫХ</p>
                            </div>
                            <button className='task__button'>Завершить</button>
                        </li>
                        <li className='interaction__tasks--item'>
                            <p className='task__category'>Иностранные языки</p>
                            <p className='task__title'>Репетитор по английскому языку</p>
                            <p className='task__cost'>7 000 ₽</p>
                            <p className='task__date'>13.02.2024 - 20.02.2024</p>
                            <div className='task__user'>
                                <img className="task__photo" src={require('../../images/user.jpg')} />
                                <p className='task__username'><span className='orange'>СЕРГЕЙ</span> МЯКОТНЫХ</p>
                            </div>
                            <button className='task__button'>Завершить</button>
                        </li>
                        <li className='interaction__tasks--item'>
                            <p className='task__category'>Иностранные языки</p>
                            <p className='task__title'>Репетитор по английскому языку</p>
                            <p className='task__cost'>7 000 ₽</p>
                            <p className='task__date'>13.02.2024 - 20.02.2024</p>
                            <div className='task__user'>
                                <img className="task__photo" src={require('../../images/user.jpg')} />
                                <p className='task__username'><span className='orange'>СЕРГЕЙ</span> МЯКОТНЫХ</p>
                            </div>
                            <button className='task__button'>Завершить</button>
                        </li>
                    </ul>










                    <ul className={`interaction__tasks--student ${isChecked ? 'shown' : 'hidden'}`}>
                    <li className='interaction__tasks--item'>
                            <p className='task__category'>Программирование</p>
                            <p className='task__title'>Репетитор по фронтенд-разработке</p>
                            <p className='task__cost'>1 000 ₽ / час</p>
                            <p className='task__date'>13.02.2024 - 20.02.2024</p>
                            <div className='task__user'>
                                <img className="task__photo" src={require('../../images/user.jpg')} />
                                <p className='task__username'><span className='orange'>СЕРГЕЙ</span> МЯКОТНЫХ</p>
                            </div>
                            <button className='task__button'>Завершить</button>
                        </li>
                        <li className='interaction__tasks--item'>
                            <p className='task__category'>Программирование</p>
                            <p className='task__title'>Репетитор по фронтенд-разработке</p>
                            <p className='task__cost'>1 000 ₽ / час</p>
                            <p className='task__date'>13.02.2024 - 20.02.2024</p>
                            <div className='task__user'>
                                <img className="task__photo" src={require('../../images/user.jpg')} />
                                <p className='task__username'><span className='orange'>СЕРГЕЙ</span> МЯКОТНЫХ</p>
                            </div>
                            <button className='task__button'>Завершить</button>
                        </li>
                        <li className='interaction__tasks--item'>
                            <p className='task__category'>Программирование</p>
                            <p className='task__title'>Репетитор по фронтенд-разработке</p>
                            <p className='task__cost'>1 000 ₽ / час</p>
                            <p className='task__date'>13.02.2024 - 20.02.2024</p>
                            <div className='task__user'>
                                <img className="task__photo" src={require('../../images/user.jpg')} />
                                <p className='task__username'><span className='orange'>СЕРГЕЙ</span> МЯКОТНЫХ</p>
                            </div>
                            <button className='task__button'>Завершить</button>
                        </li>
                        <li className='interaction__tasks--item'>
                            <p className='task__category'>Программирование</p>
                            <p className='task__title'>Репетитор по фронтенд-разработке</p>
                            <p className='task__cost'>1 000 ₽ / час</p>
                            <p className='task__date'>13.02.2024 - 20.02.2024</p>
                            <div className='task__user'>
                                <img className="task__photo" src={require('../../images/user.jpg')} />
                                <p className='task__username'><span className='orange'>СЕРГЕЙ</span> МЯКОТНЫХ</p>
                            </div>
                            <button className='task__button'>Завершить</button>
                        </li>
                        <li className='interaction__tasks--item'>
                            <p className='task__category'>Программирование</p>
                            <p className='task__title'>Репетитор по фронтенд-разработке</p>
                            <p className='task__cost'>1 000 ₽ / час</p>
                            <p className='task__date'>13.02.2024 - 20.02.2024</p>
                            <div className='task__user'>
                                <img className="task__photo" src={require('../../images/user.jpg')} />
                                <p className='task__username'><span className='orange'>СЕРГЕЙ</span> МЯКОТНЫХ</p>
                            </div>
                            <button className='task__button'>Завершить</button>
                        </li>
                        <li className='interaction__tasks--item'>
                            <p className='task__category'>Программирование</p>
                            <p className='task__title'>Репетитор по фронтенд-разработке</p>
                            <p className='task__cost'>1 000 ₽ / час</p>
                            <p className='task__date'>13.02.2024 - 20.02.2024</p>
                            <div className='task__user'>
                                <img className="task__photo" src={require('../../images/user.jpg')} />
                                <p className='task__username'><span className='orange'>СЕРГЕЙ</span> МЯКОТНЫХ</p>
                            </div>
                            <button className='task__button'>Завершить</button>
                        </li>

                    </ul>
                </div>
            </div>
        </section>
        </>
    );
};

export default Interaction;