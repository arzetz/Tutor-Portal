import React from 'react';
import './Card.css';

const Card = ({name,surname,photo,price,category,title}) => {
    return (
        <div className="findtutor__card">
        <p className="task__category">{category}</p>
        <p className="task__title">{title}</p>
        <p className="task__cost">{price}</p>
        <div className="info__card">
            <img className="photo__card" src={photo} />
            <p className='task__username'> 
            <span className='orange'>{surname}</span>{' '+name}</p>
        </div>
        <button className="button__card">Подробнее  </button>
    </div>
    );
    }
    
    
    export default Card;