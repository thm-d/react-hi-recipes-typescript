import React from 'react';
import styles from "./index.module.scss";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createRecipe, updateRecipe } from "apis/Recipe";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { selectActiveRecipe } from "recoil/Selectors";
import { IRecipe } from "interfaces";

const AdminRecipesForm = () => {
  const { recipeId } = useParams();
  const recipe = useRecoilValue(selectActiveRecipe(recipeId))

  const navigate = useNavigate();

  const defaultValues = {
    title: recipe ? recipe.title : '',
    image: recipe ? recipe.image : '',
    generic: ""
  };

  const recipeSchema = yup.object({
      title: yup.string()
        .required("Le titre de la recette doit être renseigné")
        .min(10, "Le titre doit être plus explicite")
        .max(30, "Le titre doit être plus succinct"),
      image: yup.string()
        .required("Il faut renseigner une image")
        .url("L'image doit être un lien valide")
    })
  ;

  const { formState: { errors, isSubmitting }, register, handleSubmit, reset, clearErrors, setError } = useForm({
    defaultValues,
    resolver: yupResolver(recipeSchema)
  });

  const submit = async (values: Partial<IRecipe>) => {
    try {
      clearErrors();
      if (recipe) {
        await updateRecipe({
          ...values,
          id: recipe.id
        });
        navigate("/admin/recipes/list");
      } else {
        await createRecipe(values);
        reset(defaultValues);
      }
    } catch (e) {
      setError("generic", { type: "generic", message: "Il y a eu une erreur" });
    }
  };

  return (
    <form className={`d-flex flex-column card p-20 ${styles.recipeForm}`} onSubmit={handleSubmit(submit)}>
      <h2 className="mb-20">Add a recipe</h2>
      <div className="d-flex flex-column mb-20">
        <label className="mb-5">Title</label>
        <input {...register("title")} type="text" className="mb-5"/>
        {errors.title && <p className="form-error">{errors.title.message}</p>}
      </div>
      <div className="d-flex flex-column mb-20">
        <label className="mb-5">Image</label>
        <input {...register("image")} type="text" className="mb-5"/>
        {errors.image && <p className="form-error">{errors.image.message}</p>}
      </div>
      {errors.generic && <p className="form-error">{errors.generic.message}</p>}
      <div>
        <button disabled={isSubmitting} className="btn btn-primary">Save</button>
      </div>
    </form>
  );
};

export default AdminRecipesForm;