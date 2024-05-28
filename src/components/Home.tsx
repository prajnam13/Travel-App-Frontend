import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Place } from '../types';
const Home: React.FC = () => {
  const [places, setPlaces] = useState<Place[]>([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      const result = await axios.get('/api/places?city=exampleCity');
      setPlaces(result.data);
    };
    fetchPlaces();
  }, []);

  return (
    <div>
      <h1>Places</h1>
      <ul>
        {places.map(place => (
          <li key={place.id}>{place.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
