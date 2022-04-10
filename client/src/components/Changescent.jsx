import React from "react";

let scent = [
  { label: "Blueberry", value: "Blueberry" },
  { label: "Peppermint", value: "Peppermint" },
  { label: "Lavendar", value: "Lavendar" },
];
export default function Changescent() {
  return (
    <div>
      <select>
        {scent.map((scents) => (
          <option value={scents.value}>{scents.label}</option>
        ))}
      </select>
    </div>
  );
}
