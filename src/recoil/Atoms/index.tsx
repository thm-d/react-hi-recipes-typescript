import { atom } from "recoil";
import { IRecipe } from "interfaces";
import { data } from "data/recipes";

export const recipesState = atom<IRecipe[]>({
  key: "recipesState",
  default: data.map((d, i) => ({ id: crypto.randomUUID(), ...d }))
});

export const wishlistDisplayState = atom({
  key: "wishlistDisplayState",
  default: false
});