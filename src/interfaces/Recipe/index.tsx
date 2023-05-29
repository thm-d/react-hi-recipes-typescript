import {ObjectId} from "types";

export interface IRecipe {
  id: ObjectId,
  title: string,
  image: string,
  liked: boolean,
}