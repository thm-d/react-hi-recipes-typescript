import React from 'react';
import styles from "./index.module.scss"

export const Loading = () => {
  return (
    <div className="d-flex flex-row align-items-center justify-content-center flex-fill ">
      <i className={`fa-solid fa-spinner fa-spin ${styles.spinner}`}></i>
    </div>
  );
};