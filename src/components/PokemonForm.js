import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({onAddPokemon}) {
  const [name, setName] = useState("")
  const [hp, setHp] = useState("")
  const [front, setFront] = useState("")
  const [back, setBack] = useState("")

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={() => {
          // console.log("submitting form...");
          const newPokemon = {
            name: name,
            hp: Number(hp),
            sprites: {
              front: front, 
              back: back
            }
          }

          fetch("http://localhost:3001/pokemon", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(newPokemon)
          })
          .then(r => r.json())
          .then(newPokemonData => onAddPokemon(newPokemonData))

          setName("")
          setHp("")
          setFront("")
          setBack("")
        }}
      >
        <Form.Group widths="equal">
          <Form.Input 
            fluid 
            label="Name" 
            placeholder="Name" 
            name="name" 
            onChange={e => setName(e.target.value)}
            value={name}
          />
          <Form.Input 
            fluid 
            label="hp" 
            placeholder="hp" 
            name="hp" 
            onChange={e => setHp(e.target.value)}
            value={hp}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={e => setFront(e.target.value)}
            value={front}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={e => setBack(e.target.value)}
            value={back}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
