import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  const [name, setName] = useState([]);
  const [image, setImage] = useState([]);
  const [price, setPrice] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        image: image,
        price: price,
      }),
    })
      .then((r) => r.json())
      .then((plant) => {
        onAddPlant(plant);
      });
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          placeholder="Plant name"
        />
        <inpu
          value={image}
          onChange={(e) => setImage(e.target.value)}
          type="text"
          name="image"
          placeholder="Image URL"
        />
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
