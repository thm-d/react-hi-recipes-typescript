import React from 'react';
import styles from './index.module.scss';

export const Footer = () => {
  return (
    <footer
      className={`${styles.footer} d-flex flex-row align-items-center justify-content-center p-20`}
    >
      <p>Copyright © 2023 Hi Recipes, Inc.</p>
    </footer>
  );
};