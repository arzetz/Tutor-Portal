import React from 'react';
import '../Findtutor/Category.css'
const Category = ({name}) => {
    return (
    <li className='chexbox__flex'>
    <input className='custom-checkbox' type="checkbox"></input>
    <label>{name}</label>
    </li>
    );
    }
    
    export default Category;