// interface CoursePartOne {
//   name: "Fundamentals";
//   exerciseCount: number;
//   description: string;
// }

// interface CoursePartTwo {
//   name: "Using props to pass data";
//   exerciseCount: number;
//   groupProjectCount: number;
// }

// interface CoursePartThree {
//   name: "Deeper type usage";
//   exerciseCount: number;
//   description: string;
//   exerciseSubmissionLink: string;
// }

// new types();
interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

interface CoursePartWithDescription extends CoursePartBase {
  description: string;
}

interface CoursePartOne extends CoursePartWithDescription {
  name: "Fundamentals";
}

interface CoursePartTwo extends CoursePartBase {
  name: "Using props to pass data";
  groupProjectCount: number;
}

interface CoursePartThree extends CoursePartWithDescription {
  name: "Deeper type usage";
  exerciseSubmissionLink: string;
}

interface CoursePartFour extends CoursePartWithDescription {
  name: "Fullstackopen";
  studentEnrolled: number;
}

export type CoursePartType =
  | CoursePartOne
  | CoursePartTwo
  | CoursePartThree
  | CoursePartFour;