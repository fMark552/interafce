import './App.css'
import React, { useState } from 'react';
import Artwork from './Artwork';
import Statue from './Statue';
import { motion } from "framer-motion"

const App: React.FC = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [newStatue, setNewStatue] = useState<Statue>({
    title: '',
    year: 2023,
    price: 1,
    height: 4,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewStatue((prevStatue) => ({ ...prevStatue, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();


    if (
      !/^[a-zA-Z, ]+$/.test(newStatue.title) 
    ) {
      alert('Error! Wrong Title!');
      return;
    }
    if (
      newStatue.year > new Date().getFullYear()
    ) {
      alert('Error! Wrong Year!');
      return;
    }
    if (
      newStatue.price < 1 
    ) {
      alert('Error! Wrong Price!');
      return;
    }
    if (
      newStatue.height < 10
    ) {
      alert('Error! Wrong Height!');
      return;
    }

    const updatedArtworks = [...artworks, newStatue];
    setArtworks(updatedArtworks);
    setNewStatue({
      title: '',
      year: 2023,
      price: 1,
      height: 4,
    });
  };

  const totalArtworks = artworks.length;
  const totalPrice = artworks.reduce((sum, artwork) => sum + artwork.price, 0);

  return (
    <div>
      <motion.div>
        <h1>Statues...</h1>
      </motion.div>
    <div className='kozep_konzol'>
      
      <motion.div animate={{
        x: 0,
        y: 0,
        scale: 1.1,
        rotate: 0,
  }}
>
        <h3>Number of statues: {totalArtworks} pcs</h3>
        <h3>Total amount: {totalPrice} USD</h3>
      </motion.div>
      <hr/>
      <form onSubmit={handleSubmit}>
        <motion.div animate={{
        x: 0,
        y: 0,
        scale: 1.2,
        rotate: 0,
  }}>
        <label>
          Title:
          <input type="text" name="title" value={newStatue.title} onChange={handleChange} />
        </label>
        </motion.div>
        <motion.div animate={{
        x: 0,
        y: 0,
        scale: 1.2,
        rotate: 0,
  }}>
        <label>
          Year:
          <input type="number" name="year" value={newStatue.year} onChange={handleChange} />
        </label>
        </motion.div>
        <motion.div animate={{
        x: 0,
        y: 0,
        scale: 1.2,
        rotate: 0,
  }}>
        <label>
          Price (USD):
          <input type="number" name="price" value={newStatue.price} onChange={handleChange} />
        </label>
        </motion.div>
        <motion.div animate={{
        x: 0,
        y: 0,
        scale: 1.2,
        rotate: 0,
  }}>
        <label>
          Height (inch):
          <input type="number" name="height" value={newStatue.height} onChange={handleChange} />
        </label>
        </motion.div>
      
      <hr/>
      <br/>
      <motion.div animate={{
        x: 0,
        y: 0,
        scale: 1.2,
        rotate: 0,
  }}>
        <button type="submit">Add</button>
        </motion.div>
        </form>
        <br/>
    </div>
    </div>
  );
};

export default App;

