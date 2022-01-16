import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(r => r.json())
    .then(data => setPokemon(data))
  }, [])

  // console.log(pokemon)
  // console.log(search)

  function handleAddPokemon(newPokemon) {
    setPokemon([...pokemon, newPokemon])
    console.log(newPokemon)
  }

  const pokemonToDisplay = pokemon
  .filter(mon => {
    if(mon.name.includes(search)) return mon
  })
  .sort((a, b) => {
    return a.id - b.id
  })

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon} />
      <br />
      <Search onSearchChange={search => setSearch(search)} />
      <br />
      <PokemonCollection pokemon={pokemonToDisplay} />
    </Container>
  );
}

export default PokemonPage;
