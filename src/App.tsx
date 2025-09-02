import Order from './Order'
import PizzaOfTheDay from './PizzaOfTheDay';
function App() {

  return (
    <>
      <div>
        <h1 className="logo">Padre Gino's Pizza</h1>
        <Order/>
        <PizzaOfTheDay/>
      </div>
    </>
  );
}

export default App
