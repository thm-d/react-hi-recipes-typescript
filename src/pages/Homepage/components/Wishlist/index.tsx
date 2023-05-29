import React, { useState } from 'react';
import styles from "./index.module.scss";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { recipesState, wishlistDisplayState } from "recoil/Atoms";
import { selectWishedRecipes } from "recoil/Selectors";
import { updateRecipe } from "apis/Recipe";
import {IRecipe} from "interfaces";

export const Wishlist = () => {
  const setWishlistDisplay = useSetRecoilState(wishlistDisplayState);
  const wishedRecipes = useRecoilValue(selectWishedRecipes);
  const setRecipes = useSetRecoilState(recipesState);
  const [ remove, setRemove ] = useState(false);


  const handleClick = async (recipe: IRecipe) => {
    const updatedRecipe = await updateRecipe({ ...recipe, liked: false });
    setRecipes(oldRecipes => oldRecipes.map(
      or => or.id === updatedRecipe.id ? updatedRecipe : or
    ));
  };

  const handleRemoveWishList = () => {
    if (!remove) {
      setRemove(true);
      setTimeout(() => {
        setWishlistDisplay(false);
      }, 200);
    }
  };

  return (
    <div className={ styles.container }
         onClick={ handleRemoveWishList }
    >
      <div className={ `${ styles.wishlist } ${ remove ? styles.remove : "" }` }
           onClick={ (e) => e.stopPropagation() }
      >
        <h4 className="mb-20">Wishlist</h4>
        <ul>
          { wishedRecipes.length && wishedRecipes.map(r => (
            <li key={ crypto.randomUUID() }
                className="d-flex align-items-center mb-10"
            >
              <span className="flex-fill mr-15">{ r.title }</span>
              <button className="btn btn-primary"
                      onClick={ () => handleClick(r) }
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </li>
          )) }
        </ul>
      </div>
    </div>
  );
};