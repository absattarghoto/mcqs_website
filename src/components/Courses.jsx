import React from "react";
import CourseCard from "../layouts/CourseCard";

const courses = [
  {
    id: 1,
    title: "React Basics",
    description: "Intro to React.js",
    videoUrl: "https://www.youtube.com/embed/Ke90Tje7VS0",
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    description: "Deep dive into ES6+",
    videoUrl: "https://www.youtube.com/embed/B7wHpNUUT4Y",
  },
  {
    id: 3,
    title: "Tailwind CSS Guide",
    description: "Master Tailwind",
    videoUrl: "https://www.youtube.com/embed/mr15Xzb1Ook",
  },
  {
    id: 4,
    title: "Web Performance",
    description: "Optimize website speed",
    videoUrl: "https://www.youtube.com/embed/B7wHpNUUT4Y",
  },
  {
    id: 5,
    title: "React Router",
    description: "Navigation in React",
    videoUrl: "https://www.youtube.com/embed/B7wHpNUUT4Y",
  },
  {
    id: 6,
    title: "API Integration",
    description: "Fetch & display data",
    videoUrl: "https://www.youtube.com/embed/4UZrsTqkcW4",
  },
];

const Courses = () => {
  return <CourseCard courses={courses} />;
};

export default Courses;

