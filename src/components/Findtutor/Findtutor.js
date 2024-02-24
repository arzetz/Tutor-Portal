import React from 'react';

import './Findtutor.css';

const Findtutor = () => {
return (
<section className='findtutor'>
    <div className="findtutor__container">
        <h1 className="findtutor__title">Найти репетитора</h1>
        <div className="findtutor__content">
            <div className="findtutor__filters">
                <h3 className="ft_text">Поиск по фильтрам</h3>
                    <input 
                    type="text"
                    placeholder='Поиск по ключевым словам'
                    className='search__input'
                    onChange={(event)=> console.log(event.target.value)}
                    />
                    <div className="budget__search">
                            <input 
                            type="text"
                            placeholder='Бюджет от'
                            className='budget__input'
                            onChange={(event)=> console.log(event.target.value)}
                            />
                            <input 
                            type="text"
                            placeholder='Бюджет до'
                            className='budget__input'
                            onChange={(event)=> console.log(event.target.value)}
                            />
                    </div>
                </div>
            </div>
        <div className="findtutor__tasks">
            
        </div>
    </div>
</section>
);
};
export default Findtutor;