import { useState, useEffect, useMemo } from 'react';

export interface Person {
  name: string;
  producerName: string;
  beverageName: string;
  beverageColor: string;
  beverageStyle: string;
  producerLocation: string;
  abv: number;
  ibu: number;
  logo: string;
  level: number;
}

// with generic
function useFetchData<Payload>(url: string): {
  data: Payload | null;
  done: boolean;
} {
  const [data, setData] = useState<Payload | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((response: Payload) => {
        setData(response);
        setDone(true);
      });
  }, [url]);

  return {
    data,
    done
  };
}

export default function CustomHookComponent() {
  const { data } = useFetchData<Person[]>('/person.json');
  const portlandTaps = useMemo(
    () =>
      (data || []).filter((bev) => bev.producerLocation.includes('Portland')),
    [data]
  );

  return (
    <div>
      {portlandTaps.length && <img src={data![0].logo} alt={data![0].name} />}
    </div>
  );
}

/*
import { useState, useEffect } from 'react';

export interface Person {
  name: string;
  producerName: string;
  beverageName: string;
  beverageColor: string;
  beverageStyle: string;
  producerLocation: string;
  abv: number;
  ibu: number;
  logo: string;
  level: number;
}

function useFetchData(url: string): {
  data: Person[] | null;
  done: boolean;
} {
  const [data, setData] = useState<Person[] | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((response: Person[]) => {
        setData(response);
        setDone(true);
      });
  }, [url]);

  return {
    data,
    done
  };
}

export default function CustomHookComponent() {
  const { data, done } = useFetchData('/person.json');

  return <div>{done && <img src={data![0].logo} alt={data![0].name} />}</div>;
}

*/
