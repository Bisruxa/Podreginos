export interface pizzaProps {
  id?: number;
  name: string;
  description?: string;
  image?: string;
  sizes?: Record<"S" | "M" | "L", number>; // price mapping
} 
const Pizza = (props:pizzaProps) => {
  return (
    <div className="pizza">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      {/* <img src={props.image} alt={props.name}/> */}
    </div>
  );
};
export default Pizza