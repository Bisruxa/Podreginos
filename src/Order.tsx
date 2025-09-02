import { useState} from "react";
import { useQuery } from "@tanstack/react-query";
import Pizza from "./Pizza";
import fetchPizzas from "./api/utils/fetch";
import type { pizzaProps } from "./Pizza";
type PizzaSize = "S" | "M" | "L";

export default function Order() {
  const [selectedPizzaId, setSelectedPizzaId] = useState<number | null>(null);  
  const [pizzaSize, setPizzaSize] = useState<PizzaSize>("S");
  const {
    data: pizzas,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["pizzas"],
    queryFn: fetchPizzas,
  });

  if (isLoading) return <p>Loading....</p>;
  if (error) return <p>Error: {error.message}</p>;
console.log(`selected pizza Id ${selectedPizzaId}`)
  const selectedPizza =
    pizzas.find((pizza: pizzaProps) => pizza.id === selectedPizzaId) ||
    pizzas[0];
    console.log(`selected pizza ${selectedPizza.name}`)
  return (
    <div className="order">
      <h2>Create Order</h2>
      <form action="">
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza Type</label>
            <select
              name="pizza-type"
              value={selectedPizzaId ||""}
              onChange={(e) => setSelectedPizzaId(Number(e.target.value))}
            >
              {pizzas.map((pizza: pizzaProps) => (
                <option value={pizza.id} key={pizza.id}>
                  {pizza.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="pizza-size">Pizze Size</label>
            <div>
              <span>
                <input
                  type="radio"
                  checked={pizzaSize === "S"}
                  name="pizza-size"
                  value="S"
                  id="pizza-s"
                  onChange={() => setPizzaSize("S")}
                />
                <label htmlFor="pizza-s">small</label>
              </span>
              <span>
                <input
                  type="radio"
                  checked={pizzaSize === "M"}
                  name="pizza-size"
                  value="M"
                  id="pizza-m"
                  onChange={() => setPizzaSize("M")}
                />
                <label htmlFor="pizza-m">Medium</label>
              </span>
              <span>
                <input
                  type="radio"
                  checked={pizzaSize === "L"}
                  name="pizza-size"
                  value="L"
                  id="pizza-l"
                  onChange={() => setPizzaSize("L")}
                />
                <label htmlFor="pizza-l">Large</label>
              </span>
            </div>
          </div>
          <button type="submit">Add to Cart</button>
          <div className="order-pizza">
            {selectedPizza && (
              <div>
                <Pizza
                  name={selectedPizza.name}
                  description={selectedPizza.description}
                  // image={selectedPizza.image}
                />
                <p>13.3</p>
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
