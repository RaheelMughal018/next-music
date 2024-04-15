"use client";

import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchool = [
  {
    title: "Harmony Haven Music Academy",
    description:
      "Unlock Your Musical Potential with Us! At Harmony Haven Music Academy, we're passionate about nurturing talent and fostering a lifelong love for music. Whether you're a beginner or an advanced musician, our experienced instructors will guide you on your musical journey, offering personalized lessons in a supportive and inspiring environment.",
  },
  {
    title: "Melody Masters Academy",
    description:
      "Discover the Joy of Music at Melody Masters Academy! Our mission is to ignite a passion for music in every student who walks through our doors. With a diverse range of courses catering to all ages and skill levels, our dedicated instructors provide comprehensive instruction in instruments, music theory, composition, and more. Join us and let your musical dreams take flight!",
  },
  {
    title: "Rhythmic Roots Music School",
    description:
      "Where Rhythm and Melody Meet! At Rhythmic Roots Music School, we believe that music is the universal language of the soul. Our dynamic programs combine traditional teaching methods with innovative approaches to help students develop their musical talents and express themselves through rhythm and melody. Join our vibrant community and embark on a musical adventure!",
  },
];
export default function WhyChooseUs() {
  return <StickyScroll content={musicSchool} />;
}
