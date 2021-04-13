import React from "react";
import { CoursePartType } from "../type";

const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

const Part: React.FC<{ part: CoursePartType }> = ({ part }) => {
  switch (part.name) {
    case "Fundamentals":
      return (
        <div>
          <p>
            <strong>
              {part.name} {part.exerciseCount}
            </strong>
          </p>
          <p>{part.description}</p>
          <hr></hr>
        </div>
      );

    case "Using props to pass data":
      return (
        <div>
          <p>
            <strong>
              {part.name} {part.exerciseCount}
            </strong>
          </p>
          <p>groupProjectCount {part.groupProjectCount}</p>
          <hr></hr>
        </div>
      );

    case "Deeper type usage":
      return (
        <div>
          <p>
            <strong>
              {part.name} {part.exerciseCount}
            </strong>
          </p>
          <p>{part.description}</p>
          <a href={part.exerciseSubmissionLink}>Link</a>
          <hr></hr>
        </div>
      );

    case "Fullstackopen":
      return (
        <div>
          <p>
            <strong>
              {part.name} {part.exerciseCount}
            </strong>
          </p>
          <p>{part.description}</p>
          <p>Student Enrolled: {part.studentEnrolled}</p>
          <hr></hr>
        </div>
      );

    default:
      return assertNever(part);
  }
};

export default Part;
