import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import PokemonCollection from "./components/PokemonCollection";
import { pokemon } from "./globalInterface";
interface pokemons {
  name:string, 
  url:string
}
export interface Detail {
  id: number, 
  isOpened: boolean
}
function App() {
  const [pokemon, setPokemon] = useState<pokemon[]>([])
  const [nextUrl, setNextUrl] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const [viewDetail, setViewDetail] = useState<Detail>({
    id:0,
    isOpened: false
  })
 useEffect(()=>{
  const getPokemon = async() => {
    const res = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=10&offset=10"
    );
    setNextUrl(res.data.next);
    res.data.results.forEach(async (pokemon: pokemons) => {
      const poke = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );
      setPokemon((p) => [...p, poke.data]);
    });
    setLoading(false)
  }
  getPokemon()
 },[])
 console.log(pokemon)
 const nextPage = async() => {
  setLoading(true)
  const res = await axios.get(nextUrl)
  setNextUrl(res.data.next)
  res.data.results.forEach(async (pokemon: pokemons) => {
    const poke = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
    );
    setPokemon((p) => [...p, poke.data]);
  });
  setLoading(false)
 }
 return (
    <div className="App">
      <div className="container">
        <header className="pokemon-header">Pokemon</header>
        <PokemonCollection pokemons={pokemon} viewDetail={viewDetail} setViewDetail={setViewDetail}></PokemonCollection>
        <button className="button" onClick={nextPage}>{ loading ? "Loading" : "Load more"}</button>
      </div>
    </div>
  );
}

export default App;
