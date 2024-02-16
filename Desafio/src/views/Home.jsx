import React, { useContext } from 'react';
import { PizzaContext } from '../context/PizzaContext'; 
import { Link } from 'react-router-dom';

function Home() {
    const { pizzas, agregarAlCarro } = useContext(PizzaContext);

    
    return(
        <div className="container">
            <header className="header">
                <h1>Pizzería Mamma Mia!</h1>
                <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
            </header>
            <div className="pizzas-container">
                {pizzas.map(pizza => (
                    <div key={pizza.id} className="pizza-card">
                        <img src={pizza.img} alt={pizza.name} />
                        <h3>{pizza.name}</h3>
                        <p>Ingredientes:</p>
                        <ul>
                            {pizza.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                        <div className="price-action-container">
                            <span className="price">${pizza.price}</span>
                            <Link to={`/pizza/${pizza.id}`} className="btn">Ver Más</Link>
                            <button className="btn" onClick={() => agregarAlCarro(pizza)}>Añadir</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
