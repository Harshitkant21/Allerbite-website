"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function AboutSection() {
  const data = [
    {
      title: "Key Features",
      content: (
        <div>
          <p className="text-neutral-200 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Explore features to help you make healthier, easier meal choices.
          </p>
          <div className="mb-8">
            <ul className="text-neutral-400 dark:text-neutral-400 text-xs md:text-sm">
              <li className="flex gap-2 items-center mb-1 md:mb-4">
                <span className="flex gap-4">-</span> Scan ingredients to check
                for safety based on your allergy profile.
              </li>
              <li className="flex gap-2 items-center mb-1 md:mb-4">
                <span className="flex gap-4">-</span> Turn meal ideas into
                detailed recipes with nutritional insights.
              </li>
              <li className="flex gap-2 items-center mb-1 md:mb-4">
                <span className="flex gap-4">-</span> Suggest recipes using
                available ingredients to reduce waste.
              </li>
            </ul>
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
            <ul className="text-neutral-400 dark:text-neutral-400 text-xs md:text-sm">
              <li className="flex gap-2 items-center mb-1 md:mb-4">
                <span className="flex gap-4">-</span> Analyze items instantly
                with your camera.
              </li>
              <li className="flex gap-2 items-center mb-1 md:mb-4">
                <span className="flex gap-4">-</span> Get ideas from meals or
                ingredients on hand.
              </li>
              <li className="flex gap-2 items-center mb-1 md:mb-4">
                <span className="flex gap-4">-</span> Access easy, step-by-step
                cooking instructions.
              </li>
              <li className="flex gap-2 items-center mb-1 md:mb-4">
                <span className="flex gap-4">-</span> Receive real-time
                notifications for smarter food decisions.
              </li>
            </ul>
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
            <ul className="text-neutral-400 dark:text-neutral-400 text-xs md:text-sm">
              <li className="flex gap-2 items-center mb-1 md:mb-4">
                <span className="flex gap-4">-</span>Use Siri or shortcuts for
                quick actions.
              </li>
              <li className="flex gap-2 items-center mb-1 md:mb-4">
                <span className="flex gap-4">-</span> Stay informed with alerts
                for allergens and dietary needs.
              </li>
              <li className="flex gap-2 items-center mb-1 md:mb-4">
                <span className="flex gap-4">-</span> Enjoy a seamless
                experience with cloud-synced data.
              </li>
              <li className="flex gap-2 items-center mb-1 md:mb-4">
                <span className="flex gap-4">-</span> Utilize every ingredient
                with creative recipes.
              </li>
            </ul>
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
