
import React, {useState} from "react";
import data from "./card-data.json"
import "./app.css";

function App() {
  const [pokemons, setPokemons] = useState(data["pokemon"])

  return ( 
    <div>
    <header></header>
    <div style={{width: "90%", margin: "0 auto"}}>
     <Card pokemons={pokemons}/>
  </div>
  </div>
  )
}

export default App;



function Card(props){
  const style = {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gridTemplateRows: "300px 300px 300px 300px 300px",
    gridGap: "20px 20px"
  }

  const pokemons = props.pokemons.map((pokemon, i) =>
  <div key={i } class="card">
    <img src={pokemon.image} alt={pokemon.name + " pokemon image"}/>
    <h2>{pokemon.name}</h2>
    <div className="bottomCard">
    <ul>
      <p>Moves</p>
      <li>{pokemon.moves[0]}</li>
      <li>{pokemon.moves[1]}</li>
      <li>{pokemon.moves[2]}</li>
    </ul>
    <ul>
      <p>Stats</p>
      <li>Speed: {pokemon.stats.speed}</li>
      <li>Attack: {pokemon.stats.attack}</li>
      <li>Defense: {pokemon.stats.defense}</li>
    </ul>
    </div>
  </div>

);

  return (
    <div style={style}>
      {pokemons}
    </div>
  )
}
