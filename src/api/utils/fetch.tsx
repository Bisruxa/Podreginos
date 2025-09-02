async function fetchPizzas(){
  const res = await fetch("http://127.0.0.1:3000/api/pizzas")
  if(!res.ok){
    throw new Error("Failed to etch pizzas")
  }
  return res.json()
}
export default fetchPizzas