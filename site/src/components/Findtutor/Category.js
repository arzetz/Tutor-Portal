import React from 'react';

const Category = ({name}) => {
    return (
    <li>
    <input type="checkbox"></input>
    <label>{name}</label>
    </li>
    );
    }
    
    
    export default Category;