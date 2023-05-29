import React, { Suspense } from 'react';
import { Outlet, useLocation } from "react-router-dom";
import { AdminRecipesNav } from "pages/Admin/pages/AdminRecipes/components/AdminRecipesNav";


const AdminRecipes = () => {
  const { key } = useLocation()

  return (
    <div className="d-flex flex-fill flex-column">
      <h4 className="mb-20">Recipes management</h4>
      <div className="d-flex flex-fill flex-column">
        <AdminRecipesNav/>
        <div className="d-flex flex-fill flex-column">
          <Suspense>
            <Outlet key={key}/>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default AdminRecipes;