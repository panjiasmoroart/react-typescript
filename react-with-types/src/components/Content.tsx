import React from "react";
import { CoursePartType } from "../type";
import Part from "./Part";

const Content: React.FC<{ parts: CoursePartType[] }> = ({ parts }) => {
  return (
    <div>
      {parts.map((part, i) => (
        <Part key={i} part={part} />
      ))}
    </div>
  );
};

export default Content;
