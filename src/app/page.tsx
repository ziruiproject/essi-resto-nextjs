"use client";

import { useEffect, useState } from "react";
import { Food } from "../models/food";
import { Category } from "../models/category";
import FoodList from "@/components/food-list";

export default function Home() {
  const [foods, setFoods] = useState<Food[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });

    fetch("http://localhost:8000/api/foods")
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
      });
  }, []);

  return (
    <main>
      <FoodList foods={foods}></FoodList>
    </main>
  );
}
