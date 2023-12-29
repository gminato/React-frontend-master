import fetchBreedList from "./fetchBreedList";
import { useQuery } from "@tanstack/react-query";
const useBreedList = (animal) => {
  const breedList = useQuery(["breedList", animal], fetchBreedList);

  return [breedList?.data?.breeds ?? [], breedList?.isLoading];
};

export default useBreedList;
