import { ReactElement, ReactNode } from 'react';

export interface HeadingProps {
  title?: string;
  description?: string;
}

export function Heading({ title }: HeadingProps) {
  return <h3>{title}</h3>;
}

export const Content = ({ description }: HeadingProps) => (
  <div>{description}</div>
);

// first way
export function List<ListItem>({
  items,
  render
}: {
  items: ListItem[];
  render: (item: ListItem) => ReactNode;
}) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
}

// second way
export const ListBackend: <ListItem>({
  items,
  render
}: {
  items: ListItem[];
  render: (item: ListItem) => ReactNode;
}) => ReactElement = ({ items, render }) => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{render(item)}</li>
    ))}
  </ul>
);

export default function TestComponent() {
  return (
    <>
      <Heading title="best backend and frontend" />
      <Content description="lorem ipsum dolor sit amet, consectetur adip" />
      <List
        items={['ReactJS', 'VueJS', 'Angular']}
        render={(str) => <strong>{str}</strong>}
      />
      <ListBackend
        items={['Go', 'Ruby', 'Java']}
        render={(str) => <strong>{str}</strong>}
      />
    </>
  );
}
