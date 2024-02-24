import '../../css/welcome.css';

function Welcome() {
    return (
        <section className='welcome'>
            <div className="welcome__container">
                <h1 className='welcome__title'>Нуждаешься в помощи изучения материала?</h1>
                <div className="welcome__block">
                    <div className='left-side'>
                        <p className="welcome__text">
                        Найди своего идеального преподавателя прямо сейчас! Мы подберем наилучших специалистов, прошедших тщательный отбор. Оставьте заботы о поиске нам, вы заслуживаете только лучшего!
                        </p>
                        <a href="findtutor.html" className="link welcome__button">
                                ПОДОБРАТЬ РЕПЕТИТОРА ➜
                        </a>
                        <ul className="statistics">
                            <li className='statistics__item'>
                                <span className='statistics__title'>
                                    10<span className='orange'>+</span>
                                </span>
                                <p class="statistics__text">
                                ПРЕДМЕТОВ ДЛЯ ИЗУЧЕНИЯ
                                </p>
                            </li>
                            <li className='statistics__item'>
                                <span className='statistics__title'>
                                    100<span className='orange'>+</span>
                                </span>
                                <p class="statistics__text">
                                ОПЫТНЫХ РЕПИТИТОРОВ
                                </p>
                            </li>
                            <li className='statistics__item'>
                                <span className='statistics__title'>
                                    1000<span className='orange'>+</span>
                                </span>
                                <p class="statistics__text">
                                УЧЕНИКОВ С НАМИ СЕЙЧАС
                                </p>
                            </li>
                        </ul>
                    </div>
                    
                    <div className='right-side'>
                        <img className="welcome__photo" alt="abc" src={require('../../images/welcome2.jpg')} />
                    </div>
                </div>
                <ul className='find'>
                    <li className='find__item'>
                        <a className="find__link link" href="findtutor.html">
                            <h2 className='find__title'>ПОИСК РЕПЕТИТОРА</h2>
                            <p className='find__text'>
                            Найди опытного репетитора для своего обучения. Используйте фильтры, чтобы сузить поиск.
                            </p>
                        </a>
                    </li>
                    <li className='find__item'>
                        <a className="find__link link" href="findstudent.html">
                            <h2 className='find__title'>ПОИСК УЧЕНИКОВ</h2>
                            <p className='find__text'>
                                Разместите описание своей услуги и найдите учеников, которые заинтересованы вашим подходом к обучению. 
                            </p>
                        </a>
                    </li>
                
                </ul>
            </div>
        </section>
    );
};

export default Welcome;