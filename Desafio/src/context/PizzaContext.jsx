import { createContext , useState ,useEffect } from "react";
export const PizzaContext = createContext()

const PizzaProvider = ({ children }) => {
    const [ carro , setCarro ] = useState([]);
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        consultarApi();
     }, []);

const consultarApi = async () => {
    const res = await fetch("/pizzas.json");
    const pizzas = await res.json();
    setPizzas(pizzas);
}

  return (
    <PizzaContext.Provider value = {{carro ,setCarro , pizzas }}>
        {children}
    </PizzaContext.Provider>
    );    

}

export default PizzaContext