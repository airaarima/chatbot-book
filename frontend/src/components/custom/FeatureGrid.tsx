"use client";

import { FeatureCard } from "./FeatureCard";
import { featureData } from "@/data/featureData";

export function FeatureGrid({ features = featureData }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
          index={index}
        />
      ))}
    </div>
  );
}
