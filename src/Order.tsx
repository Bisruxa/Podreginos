import { useState } from "react";
import Pizza from "./Pizza";
type PizzaSize ="S" | "M" |"L"
export default function Order() {
  const [pizzaType,setPizzaType]= useState("pepperoni")
  const [pizzaSize, setPizzaSize] = useState<PizzaSize>("S")
  return (
    <div className="order">
      <h2>Create Order</h2>
      <form action="">
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza Type</label>
            <select
              name="pizza-type"
              value={pizzaType}
              onChange={(e) => setPizzaType(e.target.value)}
            >
              <option value="pepperoni">The pepperoni pizza</option>
              <option value="hawaiian">The hawaiian pizza</option>
              <option value="big meat">The meat pizza</option>
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
            <Pizza
              name="pepperoni"
              description="another pizza"
              image="/public/assets/pepperoni.webp"
            />
            <p>13.3</p>
          </div>
        </div>
      </form>
    </div>
  );
}
