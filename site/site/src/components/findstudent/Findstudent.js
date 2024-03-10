import React, {useState, useEffect} from "react";
import { categories } from "./Categories";
import Category from "./Category";
import { cards } from "./Cards";
import Card from "../card/Card";

import "./findstudent.css";
import "../Findtutor/Categories.css";
const API_BASE = "http://localhost:1234";

const Findstudent = () => {

  const [findStudentCards, setCard] = useState([]);

  useEffect(() => {
      GetCards();
      console.log(findStudentCards);
  }, [])

  const GetCards = () => {
      fetch(API_BASE + "/findstudent")
      .then(res => res.json())
      .then(data => setCard(data))
      .catch(err => console.error(err));
  }

  return (
    <section className="findstudent">
      <div className="findstudent__container">
        <h1 className="findstudent__title">Найти ученика</h1>
        <div className="findstudent__content">
          <div className="findstudent__filters">
            <h3 className="ft_text">Поиск по фильтрам</h3>
            <input
              type="text"
              placeholder="Поиск по ключевым словам"
              className="search__input"
              onChange={(event) => console.log(event.target.value)}
            />
            <div className="budget__search">
              <input
                type="text"
                placeholder="Бюджет от"
                className="budget__input"
                onChange={(event) => console.log(event.target.value)}
              />
              <input
                type="text"
                placeholder="Бюджет до"
                className="budget__input"
                onChange={(event) => console.log(event.target.value)}
              />
            </div>
            <ul className="labelbox">
              {categories.map((category) => {
                return <Category name={category.name} />;
              })}
            </ul>
            <button className="button__primenit">Применить</button>
            <button className="button__sbros">Сбросить</button>
          </div>

          <ul className="findtutor__tasks">
            {findStudentCards.map((card) => {
              return (
                <Card
                  name={"Чел"}
                  surname={"Тытович"}
                  price={card.price}
                  category={card.category}
                  title={card.title}
                  photo={card.photo}
                  application_id={card._id}
                  description = {card.description}
                  currentpage="findstudent"
                ></Card>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Findstudent;
