import React from 'react';
import {useState} from 'react';

import '../css/header.css';
import '../css/normalize.css';
import '../css/reset.css';

import {Link} from 'react-router-dom';

import Menu from "./Menu.js";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const items = [{value:"ГЛАВНАЯ",href:"/"},{value:"НАЙТИ РЕПЕТИТОРА",href:"/findtutor"},{value:"НАЙТИ УЧЕНИКА",href:"/findstudent"},{value:"ОТЗЫВЫ",href:"/reviews"},{value:"РЕГИСТРАЦИЯ",href:"/registration"},{value:"ВХОД",href:"/login"}]
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const Click = () => {
      setIsDropdownOpen(false);
    }
  
  return (
    <header className='header'>
      <div className='header__container'>
        <ul className='header__menu'>
          <li className='header__menu--item logo'>
            <Link className='link logo' to="/">
              <img className='logo__icon' src={require('../icons/logo.png')} />
              <p className='logo__title'>Навигатор обучения</p>
            </Link>
          </li>
          <li className='header__menu--item links'>
            <Link href="findtutor" className='link find-tutor'>НАЙТИ <span className='orange'>РЕПЕТИТОРА</span><div className="link__underline"></div></Link>
            <Link href="findstudent" className='link find-student'>НАЙТИ <span className='orange'>УЧЕНИКА</span><div className="link__underline"></div></Link>
            
          </li>
          <li className='header__menu--item user hidden'>
            <button className='user__button' onClick={handleClick}>
                  Сергей Мякотных
                  <img src={require('../icons/arrow.png')} className='user__button--arrow'/>
              </button>
              {isDropdownOpen && (
                  <ul className="user__dropdown">
                      <Link to='/profile' onClick={() => Click()} className='user__item'><img className='user__icon' src={require('../icons/profile.png')}/> Профиль</Link>
                      <Link to='/history' onClick={() => Click()} className='user__item'><img className='user__icon' src={require('../icons/history.png')}/> История платежей</Link>
                      <li className='user__item'><img className='user__icon' src={require('../icons/exit.png')}/> Выход</li>
                  </ul>
              )}
          </li>
          <li className='header__menu--item buttons'>
            <Link to="/registration" className='link button--registration'>
              РЕГИСТРАЦИЯ
            </Link>
            <Link to="/login" className='link button--login'>
              ВХОД
            </Link>
          </li>
          <li className='burger-menu' onClick={() => setMenuActive(!menuActive)}>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </li>
          <Menu active={menuActive} setActive={setMenuActive} header={"Меню"} items={items}/>
        </ul>
      </div>
    </header>
  );
};

export default Header;
