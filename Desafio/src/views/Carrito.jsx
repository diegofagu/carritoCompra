import React, { useContext } from "react";
import { PizzaContext } from '../context/PizzaContext'; 

function Carrito() {
    const { carro, modificarCantidad ,eliminarPizzaDelCarrito} = useContext(PizzaContext);

    const incrementarCantidad = (pizzaId) => {
        modificarCantidad(pizzaId, carro.find(p => p.id === pizzaId).cantidad + 1);
    };

    const decrementarCantidad = (pizzaId) => {
        const cantidadActual = carro.find(p => p.id === pizzaId).cantidad;
        if (cantidadActual > 1) {
            modificarCantidad(pizzaId, cantidadActual - 1);
        } else {
            eliminarPizzaDelCarrito(pizzaId);
        }
    };

    const totalCarro = carro.reduce((total, pizza) => total + pizza.price * pizza.cantidad, 0);

    return (
        <div>
            <h1>Detalles del pedido:</h1>
            {carro.length > 0 ? (
                carro.map(pizza => (
                    <div key={pizza.id} className="carrito-item">
                        <div>
                            <img className="carrito-item-img" src={pizza.img} alt={pizza.name} />
                            <span>{pizza.name}</span>
                            <span>${pizza.price.toFixed(2)}</span>
                            <div className="carrito-item-controles">
                                <button onClick={() => decrementarCantidad(pizza.id)}>-</button>
                                <span>{pizza.cantidad}</span>
                                <button onClick={() => incrementarCantidad(pizza.id)}>+</button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>Tu carrito está vacío</p>
            )}
            <div className="carrito-total">
                <h2>Total: ${totalCarro.toFixed(2)}</h2>
                <button className="carrito-pagar-btn" onClick={() => alert('Procediendo al pago...')}>Ir a Pagar</button>
            </div>
        </div>
    );
}

export default Carrito;
