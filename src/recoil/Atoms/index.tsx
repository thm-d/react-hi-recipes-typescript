import { atom } from "recoil";
import {IRecipe} from "interfaces";

export const recipesState = atom<IRecipe[]>({
  key: "recipesState",
  default: []
});

export const wishlistDisplayState = atom({
  key: "wishlistDisplayState",
  default: false
});