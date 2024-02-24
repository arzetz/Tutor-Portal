import React from 'react';

import '../../css/startnow.css';
import '../../css/normalize.css';
import '../../css/reset.css';

const StartNow = () => {
    return (
        <section className='startnow'>
            <div className='startnow__container'>
                <h3 className='startnow__title'>Начните сейчас!</h3>
                <div className='startnow__content'>
                    <div className='startnow__left'>
                    <p className='startnow__text'>Мы предлагаем надежный сервис подбора репетиторов и учеников для онлайн занятий. Уверенно выбирайте своего учителя или ученика, который подойдёт именно вам. </p>
                    <div className='startnow__buttons'>
                        <a href="findtutor.html" className='startnow__buttons--findtutor'>Найти репетитора</a>
                        <a href="findtutor.html" className='startnow__buttons--findstudent'>Найти ученика</a>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StartNow;