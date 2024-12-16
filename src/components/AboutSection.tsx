"use client";

import Image from "next/image";
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
          <div className="grid grid-cols-2 gap-4">
            {/* <Image
              src=""
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            /> */}
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
          <div className="grid grid-cols-2 gap-4">
            {/* <Image
              src=""
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            /> */}
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
          <div className="grid grid-cols-2 gap-4">
            {/* <Image
              src=""
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            /> */}
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
