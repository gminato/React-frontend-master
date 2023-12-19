import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";

const Details = () => {
  const { id } = useParams();
  const results = useQuery(["petDetails", id], fetchPet);
  const pet = results?.data?.pets?.[0];

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <div className="loader">⟳</div>
      </div>
    );
  }

  return (
    <div className="details">
      <h1>{pet.name}</h1>
      <h2>
        {pet.animal} - {pet.breed} - {pet.city}, {pet.state}
        <button>Adopt {pet.name}</button>
        <p>{pet.description}</p>
      </h2>
      <img src={pet.images[0]} alt={pet.name} />
      <p>{pet.description}</p>
    </div>
  );
};

export default Details;
