import React, { useState, useEffect } from 'react';
import '../DogCard.css';

const ProfileDogCard = ({ dog }) => {

    const [photoURL, setPhotoURL] = useState('');

    useEffect(() => {
      // Create a blob URL only if dog.photo is a File object
      if (dog.photo instanceof File) {
        const url = URL.createObjectURL(dog.photo);
        setPhotoURL(url);
  
        // Revoke the blob URL when it's no longer needed
        return () => URL.revokeObjectURL(url);
      } else {
        // If dog.photo is already a URL string, just use it as is
        setPhotoURL(dog.photo);
      }
    }, [dog.photo]);

  return (
    <div className="dog-card">
      <h2>{dog.name}</h2>
      <img src={photoURL} alt={`The ${dog.name}`} className="dog-image" />
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

export default ProfileDogCard; 
