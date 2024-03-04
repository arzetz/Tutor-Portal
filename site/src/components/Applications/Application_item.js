import {React} from 'react';

const Application = ({category, title}) => {
    return (
        <>
            <div className="applications__item">
                <div className="applications__item--info">
                    <p className="application__category">{category}</p>
                    <p className="application__title">{title}</p>
                </div>
                <div className='application__buttons'>
                    <button className='application__btn'>Подробнее</button>
                    <button className='application__btn'>Принять</button>
                    <button className='application__btn'>Отказаться</button>
                </div>
            </div>
        
        </>
    );
}

export default Application;