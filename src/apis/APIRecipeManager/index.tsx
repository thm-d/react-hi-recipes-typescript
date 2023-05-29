// export class APIRecipeManager {
//   static getBaseApiUrl() {
//     return "https://recipes-33b07-default-rtdb.europe-west1.firebasedatabase.app/";
//   }
//
//   static getRecipes = async () => {
//     const response = await fetch(APIRecipeManager.getBaseApiUrl() + "recipes.json");
//     if (response.ok) {
//       const body = await response.json();
//       const fetchedRecipes = [];
//       for (const key in body) {
//         fetchedRecipes.push({
//           id: key,
//           ...body[key]
//         });
//       }
//       return fetchedRecipes;
//     } else {
//       throw new Error("Error fetch recipes");
//     }
//   };
//
//   static getRecipe = async (id) => {
//     const response = await fetch(APIRecipeManager.getBaseApiUrl() + `recipes/${ id }.json`);
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error("Error fetch one recipe");
//     }
//   };
//
//   static deleteRecipe = async (id) => {
//     const response = await fetch(APIRecipeManager.getBaseApiUrl() + `recipes/${ id }.json`, {
//       method: "DELETE"
//     });
//     if (response.ok) {
//       return id;
//     } else {
//       throw new Error("Error delete recipe");
//     }
//   };
//
//   static updateRecipe = async (updatedRecipe) => {
//     const response = await fetch(APIRecipeManager.getBaseApiUrl() + `recipes/${ updatedRecipe.id }.json`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(updatedRecipe)
//     });
//     if (response.ok) {
//       return response.json()
//     } else {
//       throw new Error("Error update recipe");
//     }
//   };
//
//   static createRecipe = async (newRecipe) => {
//     const response = await fetch(APIRecipeManager.getBaseApiUrl() + `recipes.json`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({ ...newRecipe, liked: false })
//     });
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error("Error create recipe");
//     }
//   };
// }