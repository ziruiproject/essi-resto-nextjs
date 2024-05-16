import { Food } from "@/models/food";
import { FoodImage } from "@/models/food-images";
import Image from "next/image";

export default function FoodCard(props: { food: FoodImage }) {
  const { food } = props;
  return (
    <a href={"/foods/" + food.id} key={food.id} className="flex flex-col">
      <Image
        src={"http://localhost:8000/storage/" + food.images[0].path}
        alt={food.name}
        width={512}
        height={512}
        className="rounded-3xl"
      ></Image>
      <h3 className="pt-3">{food.name}</h3>
      <span className="font-semibold">{"Rp" + food.price}</span>
    </a>
  );
}
