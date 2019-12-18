import React, { useState, useEffect } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import useDropDown from './useDropDown';
import { async } from 'q';

const SearchParams = () => {
  const [location, setLocation] = useState('San Jose, CA');
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropDown] = useDropDown('Animals', 'dog', ANIMALS);
  const [breed, BreedDropDown, setBreed] = useDropDown('Breed', '', breeds);
  const [pets, setpets] = useState([]);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal
    });

    setPets(animals | []);
  }
  useEffect(() => {
    setBreeds([]);
    setBreed('');

    pet.breeds(animal).then(({ breeds }) => {
      const breedStrings = breeds.map(({ name }) => name);
      setBreeds(breedStrings);
    }, console.error);
  }, [animal]);

  return (
    <div className="search-params">
      <form
        onSubmit={e => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropDown />
        <BreedDropDown />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
