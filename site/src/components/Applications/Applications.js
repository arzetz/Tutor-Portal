import React from 'react';

import './Applications.css';

import {applications} from './applications_list';
import Application from './Application_item';


const Editblock = () => {
    return (
        <section className='applications'>
            <div className='applications__container'>
                <h1 className='applications__title'>Заявки</h1>
                <ul className='applications__content'>
                    {applications.map((application) => {
                        return <Application category={application.category} title={application.title}/>
                    })}
                </ul>
            </div>
        </section>
    );
};

export default Editblock;