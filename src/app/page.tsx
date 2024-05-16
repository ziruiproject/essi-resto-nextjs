"use client";

import { useEffect, useState } from "react";
import { Food } from "../models/food";
import { Category } from "../models/category";
import FoodList from "@/components/food-list";
import { FoodImage } from "@/models/food-images";
import Image from "next/image";

export default function Home() {
  const [foods, setFoods] = useState<FoodImage[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });

    fetch("http://localhost:8000/api/foods/images")
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
      });
  }, []);

  return (
    <main>
      <section className="p-4">
        <FoodList foodImage={foods}></FoodList>
      </section>
    </main>
  );
}
