import React from 'react';
import { useFetchRecipes } from "hooks/useFetchRecipes";
import styles from "./index.module.scss";
import { deleteRecipe as deleteR } from "apis/Recipe";
import { NavLink } from "react-router-dom";
import { useRecoilState } from "recoil";
import { recipesState } from "recoil/Atoms";
import { ObjectId } from "types";

const AdminRecipesList = () => {
  useFetchRecipes();
  const [ recipes, setRecipes ] = useRecoilState(recipesState)

  const deleteRecipe = async (id: ObjectId) => {
    await deleteR(id);
    setRecipes(recipes.filter(r => r.id !== id));
  };

  return (
    <ul className={styles.list}>
      {recipes.length
        ? recipes.map(r => (
          <li key={crypto.randomUUID()}
              className={`d-flex align-items-center ${styles.li}`}
          >
            <span className="flex-fill">{r.title}</span>
            <NavLink to={`../edit/${r.id}`}>
              <button className="btn btn-reverse-primary mr-15">Edit</button>
            </NavLink>
            <button className="btn btn-primary"
                    onClick={() => deleteRecipe(r.id)}
            >Delete
            </button>
          </li>
        ))
        : null}
    </ul>
  );
};

export default AdminRecipesList;