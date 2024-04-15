import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/utils/cn";
const musicSchoolTestimonials = [
  {
    quote:
      "Enrolling in Harmony Haven Music Academy was one of the best decisions I've ever made. The instructors are incredibly talented and supportive, and the atmosphere is always welcoming. Thanks to their guidance, I've grown so much as a musician.",
    name: "Emily Johnson",
    title: "Piano Enthusiast",
  },
  {
    quote:
      "I can't say enough good things about Melody Masters Academy! The teachers go above and beyond to ensure that every student feels valued and encouraged. Whether you're a beginner or a seasoned musician, you'll find a home here.",
    name: "Michael Chen",
    title: "Guitarist",
  },
  {
    quote:
      "Rhythmic Roots Music School has been a game-changer for me. The instructors are not only knowledgeable but also passionate about what they do. They've helped me push past my limits and achieve things I never thought possible.",
    name: "Sophia Ramirez",
    title: "Drummer",
  },
  {
    quote:
      "I've been taking voice lessons at Tempo Tune Music School, and I'm amazed by the progress I've made. My instructor is patient, encouraging, and truly dedicated to helping me improve. I highly recommend Tempo Tune to anyone looking to refine their singing skills.",
    name: "David Rodriguez",
    title: "Vocalist",
  },
  {
    quote:
      "Attending the Music Mastery Workshop at Crescendo Academy was an incredible experience. The workshop was well-organized, and the instructors were knowledgeable and engaging. I learned valuable techniques that have elevated my playing to new heights.",
    name: "Olivia Smith",
    title: "Flutist",
  },
];

export default function TestimonialCards() {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />

      <h2 className="text-center font-bold text-3xl mb-8 z-10">
        Hear our Harmony: Voices of Success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <InfiniteMovingCards
          items={musicSchoolTestimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}

export function BackgroundBoxesDemo() {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
        Tailwind is Awesome
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        Framer motion is the best animation library ngl
      </p>
    </div>
  );
}
