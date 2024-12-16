"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function AboutSection() {
  const data = [
    {
      title: "Key Features",
      content: (
        <div>
          <p className="text-neutral-200 dark:text-neutral-200 text-sm md:text-sm font-normal mb-4">
            Explore features to help you make healthier, easier meal choices.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-400 dark:text-neutral-300 text-xs md:text-sm">
              <strong>Ingredient Scanner:</strong> Scan product ingredients for dietary compatibility.
            </div>
            <div className="flex gap-2 items-center text-neutral-400 dark:text-neutral-300 text-xs md:text-sm">
              <strong>Meal to Recipe:</strong> Convert meal ideas into recipes with nutritional breakdown.
            </div>
            <div className="flex gap-2 items-center text-neutral-400 dark:text-neutral-300 text-xs md:text-sm">
              <strong>Ingredient to Recipe:</strong> Suggest recipes based on available ingredients.
            </div>
          </div>
          
        </div>
      ),
    },
    {
      title: "How It Works",
      content: (
        <div>
          <p className="text-neutral-200 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Easily create meals based on your preferences:
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-400 dark:text-neutral-300 text-xs md:text-sm">
              <strong>Scan Product Ingredients</strong> - Analyze ingredients for dietary match.
            </div>
            <div className="flex gap-2 items-center text-neutral-400 dark:text-neutral-300 text-xs md:text-sm">
              <strong>Meal Suggestions</strong> - Get recipe ideas from available ingredients.
            </div>
            <div className="flex gap-2 items-center text-neutral-400 dark:text-neutral-300 text-xs md:text-sm">
              <strong>Step-by-Step Instructions</strong> - Follow simple cooking directions.
            </div>
            <div className="flex gap-2 items-center text-neutral-400 dark:text-neutral-300 text-xs md:text-sm">
              <strong>Enjoy Your Meal</strong> - Savor meals made with ingredients you love.
            </div>
          </div>            
        </div>
      ),
    },
    {
      title: "Why Choose Our App?",
      content: (
        <div>
          <p className="text-neutral-200 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Simplify meal planning, reduce food waste, and eat healthier.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-400 dark:text-neutral-300 text-xs md:text-sm">
              <strong>Save Time:</strong> Quickly find recipes with what you have at home.
            </div>
            <div className="flex gap-2 items-center text-neutral-400 dark:text-neutral-300 text-xs md:text-sm">
              <strong>Reduce Waste:</strong> Minimize food waste with creative recipes.
            </div>
            <div className="flex gap-2 items-center text-neutral-400 dark:text-neutral-300 text-xs md:text-sm">
              <strong>Healthier Choices:</strong> Make informed meal decisions based on dietary needs.
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full" id="About">
      <Timeline data={data} />
    </div>
  );
}
