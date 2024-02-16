import React from 'react';
import '../css/menu.css';

import {Link} from 'react-router-dom';

const Menu = ({header, items, active, setActive}) => {
    return (
        <div className={active ? 'menu active' : 'menu'}>
            <div className='blur'>
                <div className='menu__content'>
                    <p className='menu__header'>{header}</p>
                    <ul className='menu__header--list'>
                        {items.map (item => 
                            <li className='menu__header--item'>
                                <Link className='menu__header--link' to={item.href}>{item.value}</Link>
                            </li>
                            )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Menu;