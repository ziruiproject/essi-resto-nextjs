import { Category } from "./category"
import { Food } from "./food"

export interface FoodCategories extends Food {
    categories : Category[]
}