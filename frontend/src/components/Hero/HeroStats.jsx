import React from "react";
import StatCard from "../Cards/StatCard"; // Verify this path matches your file structure

const HeroStats = () => {
  const stats = [
    {
      number: "98%",
      title: "Diagnostic Accuracy"
    },
    {
      number: "24/7",
      title: "Health Monitoring"
    },
    {
      number: "1M+",
      title: "Patient Records"
    },
    {
      number: "40%",
      title: "Faster Decisions"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 mt-12 md:mt-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <StatCard
            key={index}
            number={item.number}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroStats;