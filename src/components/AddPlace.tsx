import React, { useState } from 'react';
import axios from 'axios';

const AddPlace: React.FC = () => {
  const [city, setCity] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post('/api/places', { city, name, description });
    setCity('');
    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>City</label>
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
      </div>
      <div>
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <button type="submit">Add Place</button>
    </form>
  );
};

export default AddPlace;
