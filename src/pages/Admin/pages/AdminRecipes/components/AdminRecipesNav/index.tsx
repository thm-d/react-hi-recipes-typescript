import React from 'react';
import { NavLink } from "react-router-dom";
import styles from "./index.module.scss"


export const AdminRecipesNav = () => {
  return (
    <ul className={styles.list}>
      <NavLink className={ ({ isActive }) => isActive ? styles.active : "" } to="list">Recipes list</NavLink>
      <NavLink className={ ({ isActive }) => isActive ? styles.active : "" } to="new">Add a recipe</NavLink>
    </ul>
  );
};