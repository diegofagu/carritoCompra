import React, { useContext } from 'react';
import { PizzaContext } from '../context/PizzaContext';
import { useParams } from 'react-router-dom';

function Pizza() {
  const { pizzas } = useContext(PizzaContext);
  const { pizzaId } = useParams();
  const pizza = pizzas.find(p => p.id === pizzaId);

  if (!pizza) {
    return <div>Pizza no encontrada</div>;
  }

  return (
    <div className="pizza-detail">
      <img src={pizza.img} alt={pizza.name} />
      <h2>{pizza.name}</h2>
      <p>{pizza.desc}</p>
      <h3>Ingredientes:</h3>
      <ul>
        {pizza.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p className="price">Precio: ${pizza.price}</p>
      <button className="btn">Añadir</button>
    </div>
  );
}

export default Pizza;
