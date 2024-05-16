import { Food } from "@/models/food";

export default function FoodList(props: { foods: Food[] }) {
  const { foods } = props;
  return (
    <section>
      {foods?.map((food: Food) => {
        return <span key={food.id}>{food.name}</span>;
      })}
    </section>
  );
}
