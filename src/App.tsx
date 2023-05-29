import React from 'react';
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import styles from "App.module.scss";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
// import { seedRecipes } from "./data/seed";
// import { data } from "./data/recipes";
//
// for (const elem of data) {
//  seedRecipes(elem)
// }

const App = () => {

  return (
    <div className={ `d-flex flex-column ${ styles.appContainer }` }>
      <Header/>
      <div className="d-flex flex-column flex-fill">
        <Suspense>
          <Outlet/>
        </Suspense>
      </div>
      <Footer/>
    </div>
  );
};

export default App;