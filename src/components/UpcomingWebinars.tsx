"use client";

import Link from "next/link";
import React from "react";
import { Button } from "./ui/moving-border";
import { HoverEffect } from "./ui/card-hover-effect";

export default function UpcomingWebinars() {
  const featuredWebinars = [
    {
      title: "Unlocking the Secrets of Music Production",
      description:
        "Join us for an exclusive webinar where industry experts will reveal insider tips and tricks for mastering music production. Whether you're a beginner or a seasoned producer, you won't want to miss this opportunity to take your skills to the next level.",
      slug: "unlocking-music-production-secrets",
      isFeatured: true,
    },
    {
      title: "Mastering Guitar Techniques: From Basics to Advanced",
      description:
        "Struggling to perfect your guitar skills? Look no further! Our webinar covers everything from basic chords to advanced techniques, with step-by-step guidance from professional guitarists. Get ready to elevate your playing and impress your audience.",
      slug: "mastering-guitar-techniques",
      isFeatured: true,
    },
    {
      title: "The Art of Songwriting: Craft Your Next Hit",
      description:
        "Learn the art of songwriting from award-winning songwriters in this engaging webinar. Discover how to create catchy melodies, compelling lyrics, and unforgettable hooks that will captivate listeners and set your songs apart.",
      slug: "art-of-songwriting",
      isFeatured: true,
    },
    {
      title: "Discovering Jazz: A Journey Through Its History and Influences",
      description:
        "Delve into the world of jazz with our comprehensive webinar exploring its rich history and diverse influences. From ragtime to bebop, learn about the key figures, styles, and innovations that have shaped this iconic genre.",
      slug: "discovering-jazz",
      isFeatured: true,
    },
    {
      title: "Essentials of Music Theory: Building Blocks for Musical Mastery",
      description:
        "Get a solid foundation in music theory with our webinar designed for musicians of all levels. Whether you're a beginner or looking to refresh your knowledge, our expert instructors will guide you through the fundamentals with clarity and precision.",
      slug: "essentials-of-music-theory",
      isFeatured: true,
    },
    {
      title: "Navigating the Music Industry: Insider Insights and Career Tips",
      description:
        "Embark on a journey through the music industry with our webinar featuring seasoned professionals sharing their experiences and advice. Gain valuable insights into navigating the industry landscape and building a successful career in music.",
      slug: "navigating-music-industry",
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className=" text-base capitalize text-teal-600 tracking-wide font-semibold">
            Feature Webinars
          </h2>
          <p className=" capitalize mt-2 text-3xl tracking-tight text-white font-extrabold sm:text-4xl leading-8">
            Enhace your musical journey
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: webinar.slug,
            }))}
          />
        </div>
        <div className="mt-10 text-center">
          <Link href={"/"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              View All Webinars
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
