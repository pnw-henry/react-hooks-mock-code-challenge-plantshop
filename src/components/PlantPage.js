import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((plants) => {
        setListings(plants);
      });
  }, []);

  function handleAddPlant(newPlant) {
    const updatedPlantArray = [...listings, newPlant];
    setListings(updatedPlantArray);
  }

  const plantDisplay = listings.filter((plant) => {
    return plant.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search onSearch={setSearch} searchTerm={search} />
      <PlantList plants={plantDisplay} />
    </main>
  );
}

export default PlantPage;
