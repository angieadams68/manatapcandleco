import React from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

let scent = [
  { label: "Blueberry", value: "Blueberry" },
  { label: "Peppermint", value: "Peppermint" },
  { label: "Lavendar", value: "Lavendar" },
];
export default function Changescent() {
//   const [changescents, setChangescent] = useState("");

//   const handleChange = (e) => {
//     setChangescent({ ...changescents, [e.target.aroma]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };
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