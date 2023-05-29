import { createBrowserRouter, redirect } from "react-router-dom";
import App from "App";
import { lazy } from "react";

const Homepage = lazy(() => import("pages/Homepage"));
const Admin = lazy(() => import("pages/Admin"));
const AdminRecipes = lazy(() => import("pages/Admin/pages/AdminRecipes/"));
const AdminUsers = lazy(() => import("pages/Admin/pages/AdminUsers"));
const AdminRecipesList = lazy(() => import("pages/Admin/pages/AdminRecipes/pages/AdminRecipesList"));
const AdminRecipesForm = lazy(() => import("pages/Admin/pages/AdminRecipes/pages/AdminRecipesForm"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        index: true,
        element: <Homepage/>
      },
      {
        path: "admin",
        element: <Admin/>,
        children: [
          {
            path: "recipes",
            element: <AdminRecipes/>,
            children: [
              {
                index: true,
                loader: async () => redirect("list")
              },
              {
                path: "list",
                element: <AdminRecipesList/>
              },
              {
                path: "new",
                element: <AdminRecipesForm/>
              },
              {
                path: "edit/:recipeId",
                element: <AdminRecipesForm/>
              },
            ]
          },
          {
            path: "users",
            element: <AdminUsers/>
          },
          {
            index: true,
            loader: async () => redirect("recipes")
          }
        ]
      },
    ]
  }
]);

