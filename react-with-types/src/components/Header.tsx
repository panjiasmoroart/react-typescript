import React from "react";

// interface CourseName {
//   name: string;
// }

// export default function Header(props: CourseName) {
//   return <h1>{props.name}</h1>;
// }

// sama dengan
// export default function Header({ name }: { name: string }) {
//   return <h1>{name}</h1>;
// }

// sama dengan
const Header: React.FC<{ name: string }> = ({ name }) => <h1>{name}</h1>;

export default Header;
