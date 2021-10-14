import React from 'react';
import Card from './Card';

const CardList = ({ kitties }) => {
  return (
    <div>
      {kitties.map(kitty => (
        <Card
          key={kitty.id}
          id={kitty.id}
          email={kitty.email}
          name={kitty.name}
        />
      ))}
    </div>
  );
};

export default CardList;
