import React from "react";
import { SetLanguage } from "../actions";
import { Select } from "../Select";

interface ContentProps {
  language: string;

  setLanguage?(language: string): SetLanguage;
}

const languages: Language[] = [
  {
    code: 'en',
    name: 'English',
  },
  {
    code: 'ru',
    name: 'Russian',
  },
  {
    code: 'de',
    name: 'German',
  },
];

export function Content(props: ContentProps) {
  const { language } = props;

  if (!props.setLanguage) {
    return (
      <div>{language}</div>
    );
  }

  return (
    <Select
      language={language}
      languages={languages}
      onChange={e => {
        props.setLanguage!(e.target.value);
      }}
    />
  );
}

export interface Language {
  code: string;
  name: string;
}
