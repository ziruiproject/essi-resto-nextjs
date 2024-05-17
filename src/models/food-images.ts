import { Food } from "./food";
import { FoodCategories } from "./food-category";
import { Image } from "./image";

export interface FoodImage extends FoodCategories {
  images: Image[];
}
