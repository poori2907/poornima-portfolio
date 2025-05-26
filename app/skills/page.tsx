import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

export default function SkillsPage() {
  return (
    <div className="relative pb-16 min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Skills
          </h2>
          <p className="mt-4 text-zinc-400">
            Here are some of my skills and expertise.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />
        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-3">
          {["Skill 1", "Skill 2", "Skill 3"].map((skill, index) => (
            <Card key={index}>
              <div className="relative w-full h-full p-4 md:p-8 animate-pulse min-h-[300px]">
                <h3 className="text-xl font-semibold text-zinc-100">{skill}</h3>
                <p className="mt-2 text-zinc-400">Description of {skill}.</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 