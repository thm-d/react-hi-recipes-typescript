import React, {MouseEvent} from 'react';
import styles from "./index.module.scss";
import {IRecipe} from "interfaces";
import {ObjectId} from "types";


interface IProps {
  recipe: IRecipe,
  updateRecipe: (x: IRecipe) => Promise<void>,
  deleteRecipe: (x: ObjectId) => Promise<void>,

}

export const Recipe = (props: IProps) => {
  const {recipe, updateRecipe, deleteRecipe} = props;
  const {id, title, liked, image} = recipe;

  const handleClickLike = () => {
    updateRecipe({
      ...recipe,
      liked: !recipe.liked
    });
  };

  const handleClickDelete = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    deleteRecipe(id);
  };


  return (
    <div className={styles.recipe} onClick={handleClickLike}>
      <i className="fa-solid fa-xmark" onClick={handleClickDelete}></i>
      <div className={styles.imageContainer}>
        <img src={image} alt="recipe"/>
      </div>
      <div
        className={`${styles.recipeTitle} d-flex flex-column justify-content-center align-items-center`}
      >
        <h3 className="mb-10">{title}</h3>
        <i className={`fa-solid fa-heart ${liked ? "text-primary" : ""}`}></i>
      </div>
    </div>
  );
};