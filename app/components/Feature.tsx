import { useState } from "react";

export default function Feature() {
  const [value, setValue] = useState(0);

  return (
    <div>
      <p>This is your number: {value}</p>
      <button className="border px-2 py-1" onClick={() => setValue(value + 1)}>
        +
      </button>
      <button className="border px-2 py-1" onClick={() => setValue(value - 1)}>
        -
      </button>
    </div>
  );
}
