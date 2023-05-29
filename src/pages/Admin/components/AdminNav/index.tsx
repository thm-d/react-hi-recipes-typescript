import React from 'react';
import { NavLink } from "react-router-dom";
import styles from "./index.module.scss";

export const AdminNav = () => {
  return (
    <ul className={ `d-flex flex-column ${ styles.list }` }>
      <NavLink className={ ({ isActive }) => (isActive ? styles.active : "") } to="recipes">Recipes</NavLink>
      <NavLink className={ ({ isActive }) => (isActive ? styles.active : "") } to="users">Users</NavLink>
    </ul>
  );
};