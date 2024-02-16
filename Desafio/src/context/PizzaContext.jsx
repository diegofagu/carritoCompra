import { createContext, useState, useEffect } from "react";

export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
    const [carro, setCarro] = useState([]);
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        consultarApi();
    }, []);

    const eliminarPizzaDelCarrito = (pizzaId) => {
        setCarro(carro.filter((item) => item.id !== pizzaId));
    };

    const consultarApi = async () => {
        const url = "/pizzas.json";
        try {
            const res = await fetch(url);
            const data = await res.json(); 
            setPizzas(data);
            console.log("Pizzas cargadas: ", data);
        } catch (error) {
            console.error("Error al cargar las pizzas: ", error);
        }
    };

    const agregarAlCarro = (pizza) => {
        setCarro((carroActual) => {
            const pizzaExistente = carroActual.find((item) => item.id === pizza.id);
            if (pizzaExistente) {
                return carroActual.map((item) =>
                    item.id === pizza.id ? { ...item, cantidad: item.cantidad + 1 } : item
                );
            } else {
                return [...carroActual, { ...pizza, cantidad: 1 }];
            }
        });
    };

    const modificarCantidad = (pizzaId, nuevaCantidad) => {
        if (nuevaCantidad <= 0) {
            eliminarPizzaDelCarrito(pizzaId);
        } else {
            setCarro((carroActual) =>
                carroActual.map((item) =>
                    item.id === pizzaId ? { ...item, cantidad: nuevaCantidad } : item
                )
            );
        }
    };

    

    return (
        <PizzaContext.Provider value={{ carro, setCarro, pizzas, agregarAlCarro, modificarCantidad,eliminarPizzaDelCarrito }}>
            {children}
        </PizzaContext.Provider>
    );
}

export default PizzaProvider;
