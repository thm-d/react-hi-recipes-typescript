import { IRecipe } from "interfaces";
import { ObjectId } from "types";


const RECIPE_API = "https://recipes-33b07-default-rtdb.europe-west1.firebasedatabase.app/";

export const getRecipes = async (): Promise<IRecipe[]> => {
    const response = await fetch(`${RECIPE_API}recipes.json`);
    if (response.ok) {
      const body = await response.json();
      const fetchedRecipes = [];
      for (const key in body) {
        fetchedRecipes.push({
          id: key,
          ...body[key]
        });
      }
      return fetchedRecipes;
    } else {
      throw new Error("Error fetch recipes");
    }
  }
;

export const getRecipe = async (id: ObjectId): Promise<IRecipe> => {
  const response = await fetch(`${RECIPE_API}recipes/${id}.json`);
  if (response.ok) {
    const recipe = await response.json();
    return { id, ...recipe };
  } else {
    throw new Error("Error fetch one recipe");
  }
};

export const deleteRecipe = async (id: ObjectId): Promise<ObjectId> => {
  const response = await fetch(`${RECIPE_API}recipes/${id}.json`, {
    method: "DELETE"
  });
  if (response.ok) {
    return id;
  } else {
    throw new Error("Error delete recipe");
  }
};

export const updateRecipe = async (updatedRecipe: Partial<IRecipe>): Promise<IRecipe> => {
  const response = await fetch(`${RECIPE_API}recipes/${updatedRecipe.id}.json`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedRecipe)
  });
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Error update recipe");
  }
};

export const createRecipe = async (newRecipe: Partial<IRecipe>): Promise<IRecipe> => {
  const response = await fetch(`${RECIPE_API}recipes.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ ...newRecipe, liked: false })
  });
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Error create recipe");
  }
};