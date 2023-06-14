interface IData {
  id?: String,
  title: String,
  liked: Boolean,
  image: String,
}

const RECIPE_API = "https://recipes-33b07-default-rtdb.europe-west1.firebasedatabase.app/";

export const seedRecipes = async (data: IData) => {
  const response = await fetch(`${RECIPE_API}recipes.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  if (response.ok) {
    const data = await response.json()
    return data
  }
};