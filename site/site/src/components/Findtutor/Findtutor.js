import React, {useState, useEffect} from "react";
import { categories } from "./Categories";
import Category from "./Category";
import { cards } from "./Cards";
import Card from "../card/Card";

import "./Findtutor.css";
import "../Findtutor/Categories.css";
const API_BASE = "http://localhost:1234";

const Findtutor = () => {

  const [findTutorCards, setCard] = useState([]);

  useEffect(() => {
      GetCards();
      console.log(findTutorCards);
  }, [])

  const GetCards = () => {
      fetch(API_BASE + "/findtutor")
      .then(res => res.json())
      .then(data => setCard(data))
      .catch(err => console.error(err));
  }

  return (
    <section className="findtutor">
      <div className="findtutor__container">
        <h1 className="findtutor__title">Найти репетитора</h1>
        <div className="findtutor__content">
          <div className="findtutor__filters">
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
            {findTutorCards.map((card) => {
              return (
                <Card
                name={"Чел"}
                surname={"Тотович"}
                price={card.price}
                category={card.category}
                title={card.title}
                photo={card.photo}
                application_id={card._id}
                description = {card.description}
                currentpage="findtutor"
                ></Card>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Findtutor;
