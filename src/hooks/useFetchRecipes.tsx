import { useEffect, useState } from "react";
import { getRecipes } from "apis/Recipe";
import { useSetRecoilState } from "recoil";
import { recipesState } from "recoil/Atoms";

export const useFetchRecipes = (): [boolean, string] => {
  const setRecipes = useSetRecoilState(recipesState);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ error, setError ] = useState("");

  useEffect(() => {
    let cancel = false;
    const fetchData = async () => {
      try {
        setIsLoading(true);
        // const fetchedRecipes = await APIRecipeManager.getRecipes();
        const fetchedRecipes = await getRecipes();
        if (!cancel) {
          setRecipes(x => [...x, ...fetchedRecipes]);
        }
      } catch (e) {
        setError("ERREUR");
      } finally {
        if (!cancel) {
          setIsLoading(false);
        }
      }
    };
    fetchData();
    return () => {
      cancel = true
    };
  }, [setRecipes]);

  return [ isLoading, error ];
};