import React, { useState } from 'react';
import styles from './index.module.scss';
import { Recipe } from "pages/Homepage/components/Recipe";
import { Loading } from "components/Loading";
import { Search } from "pages/Homepage/components/Search";
import { useFetchRecipes } from "hooks/useFetchRecipes";
import { deleteRecipe as deleteR, updateRecipe as updateR } from "apis/Recipe";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { selectFilteredRecipes } from "recoil/Selectors";
import { recipesState, wishlistDisplayState } from "recoil/Atoms";
import { Wishlist } from "pages/Homepage/components/Wishlist";
import {IRecipe} from "interfaces";
import {ObjectId} from "types";


const Homepage = () => {
  const [ nbrLimitOfRecipes, setNbrLimitOfRecipes ] = useState(11);
  const [ filter, setFilter ] = useState("");
  const [ isLoading ] = useFetchRecipes();
  const recipes = useRecoilValue(selectFilteredRecipes(filter));
  const setRecipes = useSetRecoilState(recipesState);
  const showWishlist = useRecoilValue(wishlistDisplayState);

  // const updateRecipe = (updatedRecipe) => {
  //   APIRecipeManager.updateRecipe(updatedRecipe)
  //                   .then(savedRecipes => {
  //                     setRecipes(recipes.map(r => r.id === savedRecipes.id ? savedRecipes : r));
  //                   });
  // };

  const updateRecipe = async (updatedRecipe: IRecipe) => {
    const savedRecipes = await updateR(updatedRecipe);
    setRecipes(recipes.map(r => r.id === savedRecipes.id ? savedRecipes : r));
  };

  const handleClickLoadMoreRecipes = () => {
    if (nbrLimitOfRecipes < recipes.length) {
      setNbrLimitOfRecipes(x => x + 12);
    }
  };

  // const deleteRecipe = async (id) => {
  //   APIRecipeManager.deleteRecipe(id)
  //                   .then(id => {
  //                       setRecipes(recipes.filter(r => r.id !== id));
  //                     }
  //                   );
  // };

  const deleteRecipe = async (id: ObjectId) => {
    await deleteR(id);
    setRecipes(recipes.filter(r => r.id !== id));
  };

  return (
    <>
      <div className="d-flex flex-column flex-fill container p-20">
        <h1 className={ `my-30 ${styles.title}` }>Discover our new recipes</h1>
        <div className={ `card d-flex flex-fill flex-column p-20 mb-20 ${ styles.contentCard }` }>
          <Search setFilter={ setFilter }/>
          { isLoading ? (
            <Loading/>
          ) : (
            <div className={ styles.grid }>
              { recipes.filter((r, index) => index <= nbrLimitOfRecipes)
                       .map(r => (
                         <Recipe key={ crypto.randomUUID() }
                                 updateRecipe={ updateRecipe }
                                 deleteRecipe={ deleteRecipe }
                                 recipe={ r }
                         />
                       )) }
            </div>
          ) }
          <div className="d-flex flex-row align-items-center justify-content-center p-20">
            { nbrLimitOfRecipes < recipes.length ? (
              <button className="btn btn-primary" onClick={ handleClickLoadMoreRecipes }>LOAD MORE RECIPES</button>
            ) : (
              <button className="btn btn-reverse-primary">NO MORE RECIPES</button>
            ) }
          </div>
        </div>
      </div>
      { showWishlist && <Wishlist/> }
    </>
  );
};

export default Homepage;
