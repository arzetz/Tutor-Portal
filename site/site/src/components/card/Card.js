import React from 'react';
import './Card.css';

import {Link} from 'react-router-dom';

const Card = ({name,surname,photo,price,category,title, application_id}) => {

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
        <Link to={`/application/${application_id}`} className="button__card">Подробнее  </Link>
    </div>
    );
    }
    
    
    export default Card;