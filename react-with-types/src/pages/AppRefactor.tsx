import React from "react";
import Content from "../components/Content";
import Header from "../components/Header";
import Total from "../components/Total";
import { CoursePartType } from "../type";

export default function AppCommon() {
  const courseName = "React TypeScript";
  const courseParts: CoursePartType[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
      description: "This is an awesome course part",
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
      groupProjectCount: 3,
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
      description: "Confusing description",
      exerciseSubmissionLink: "https://github.com/panjiasmoroart",
    },
    {
      name: "Fullstackopen",
      exerciseCount: 207,
      description: "Introduction to mordern web development",
      studentEnrolled: 2800,
    },
  ];

  const totalParts = courseParts.reduce(
    (sum, part) => sum + part.exerciseCount,
    0
  );
  return (
    <div className="container">
      <Header name={courseName} />
      <Content parts={courseParts} />
      <Total count={totalParts} />
    </div>
  );
}

// before Component Content.tsx
// return (
//   <div className="container">
//     <Header name={courseName} />
//     {courseParts.forEach((part) => {
//       switch (part.name) {
//         case "Fundamentals":
//           document.write("<p>" + part.name + "</p>");
//           break;
//         case "Using props to pass data":
//           document.write("<p>" + part.name + "</p>");
//           break;
//         case "Deeper type usage":
//           document.write("<p>" + part.name + "</p>");
//           break;
//         default:
//           return "Fullstackopen";
//           break;
//       }
//     })}
//     {/* <Content parts={courseParts} /> */}
//     {/* <Total ... /> */}
//   </div>
// );
