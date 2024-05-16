import { Food } from "./food";
import { Image } from "./image";

export interface FoodImage extends Food {
  images: Image[];
}
