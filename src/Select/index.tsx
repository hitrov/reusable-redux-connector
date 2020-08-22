import React from "react";
import { Language } from "../Content";

interface SelectProps {
  language: string;
  languages: Language[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select = ({ language, languages, onChange }: SelectProps) => (
  <select value={language} onChange={onChange}>
    {languages.map(l => (
      <option value={l.code}>{l.name}</option>
    ))}
  </select>
);
