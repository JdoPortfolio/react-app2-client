import React from 'react';
import '../DogCard.css';

const DogCard = ({ dog }) => {
  return (
    <div className="dog-card">
      <h2>{dog.name}</h2>
      <img src={dog.image_link} alt={`The ${dog.name}`} className="dog-image" />
      <div className="dog-attributes">
        <p>Good with children: {dog.good_with_children}</p>
        <p>Playfulness: {dog.playfulness}</p>
        <p>Good with other dogs: {dog.good_with_other_dogs}</p>
        <p>Barking level: {dog.barking}</p>
        <p>Good with strangers: {dog.good_with_strangers}</p>
        <p>Protectiveness: {dog.protectiveness}</p>
        <p>Trainability: {dog.trainability}</p>
        <p>Energy level: {dog.energy}</p>
        {/* You can add more attributes from the dog object as needed */}
      </div>
    </div>
  );
};

export default DogCard; 
