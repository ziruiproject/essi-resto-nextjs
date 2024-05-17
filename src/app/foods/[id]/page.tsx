"use client";

import { FoodImage } from "@/models/food-images";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function FoodDetail() {
  const { id } = useParams();
  const [food, setFood] = useState<FoodImage | null>(null);

  useEffect(() => {
    fetch("http://localhost:8000/api/foods/" + id)
      .then((res) => res.json())
      .then((data) => {
        setFood(data);
      });
  }, [id]);

  return (
    <main className="p-4">
      <section className="flex flex-col items-center">
        <Image
          src={"http:localhost:8000/storage/" + food?.images[0].path}
          width={512}
          height={512}
          alt={food ? food.name : "food image"}
          className="rounded-2xl"
        ></Image>
        <h1 className="pt-4 font-semibold text-3xl">{food?.name}</h1>
        <div id="categories">
          {food?.categories.map((category) => {
            return <span key={category.id}>{category.name}</span>;
          })}
        </div>
      </section>
      <section className="flex flex-col items-center">
        <div>
          <h3>{"Rp" + food?.price}</h3>
          <div></div>
        </div>
      </section>
    </main>
  );
}
