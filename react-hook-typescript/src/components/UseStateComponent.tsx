import { useState } from 'react';

export default function UseStateComponent() {
  const [arr, setArr] = useState<number[]>([]);
  const [name, setName] = useState<string | null>(null);

  return (
    <>
      <div>
        <button type="submit" onClick={() => setArr([...arr, arr.length + 1])}>
          Add to Array
        </button>
        {JSON.stringify(arr)}
      </div>

      <div>
        <button type="submit" onClick={() => setName('Panji Asmoro')}>
          Add to String
        </button>
        {JSON.stringify(name)}
      </div>
    </>
  );
}
