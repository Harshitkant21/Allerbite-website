"use client";

import { title } from "process";
import React, { useEffect } from "react";
import { useId } from "react";

export function FeaturesSection() {
  return (
    <div className="py-20 lg:py-40 mx-10 lg:mx-20" id="FeatureSection">
      <p className="text-5xl font-semibold text-center text-neutral-100 dark:text-white mb-10">
        Core Features
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {grid.map((feature) => (
          <div
            key={feature.title}
            className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-8 rounded-3xl overflow-hidden h-64 shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <Grid size={20} />
            <p className="text-lg font-bold text-neutral-800 dark:text-white relative z-20">
              {feature.title}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-normal relative z-20">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const grid = [
  {
    title: "Ingredient Scanner",
    description:
      "Scan product ingredients using your device's camera to instantly determine if the item is safe for you based on your allergy profile, ensuring peace of mind while shopping.",
  },
  {
    title: "Meal to Recipe",
    description:
      "Turn any meal idea into a detailed recipe with step-by-step instructions and nutritional breakdowns tailored to your preferences and available ingredients.",
  },
  {
    title: "Ingredient to Recipe",
    description:
      "Select from the ingredients you have, and let our app suggest creative and delicious recipes to reduce food waste and simplify meal planning.",
  },
  {
    title: "Siri & Shortcuts",
    description:
      "Perform tasks hands-free with Siri voice commands or custom shortcuts, making your experience faster and more convenient.",
  },
  {
    title: "Cloud-Synced Data",
    description:
      "Securely sync your data across devices with iCloud and CloudKit, ensuring access anytime and seamless updates.",
  },
  {
    title: "Real-Time Notifications",
    description:
      "Receive instant alerts for allergens, dietary needs, and smarter food choices, keeping you informed at all times.",
  },
];

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const [p, setP] = React.useState<number[][] | null>(null);
  useEffect(() => {
    setP(
      pattern ?? [
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
      ]
    );
  }, []);
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any, index: number) => (
            <rect
              strokeWidth="0"
              key={`${patternId}-${x}-${y}-${index}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
