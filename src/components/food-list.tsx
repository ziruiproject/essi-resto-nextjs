import { Food } from "@/models/food";
import { FoodImage } from "@/models/food-images";
import FoodCard from "./food-card";

export default function FoodList(props: { foodImage: FoodImage[] }) {
  const { foodImage } = props;
  return (
    <section className="gap-4 grid grid-cols-2">
      {foodImage?.map((food: FoodImage) => {
        return <FoodCard key={food.id} food={food}></FoodCard>;
      })}
    </section>
  );
}
