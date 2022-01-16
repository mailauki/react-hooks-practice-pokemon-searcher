import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const {name, hp, sprites, id} = pokemon

  const [image, setImage] = useState(sprites.front)

  function handleImage() {
    if(image === sprites.front) {
      setImage(sprites.back)
    }
    else {setImage(sprites.front)}
  }

  return (
    <Card onClick={handleImage}>
      <div>
        <div className="image">
          <img src={image} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
