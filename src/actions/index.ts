export const SET_LANGUAGE = 'SET_LANGUAGE';

export interface SetLanguage {
  type: typeof SET_LANGUAGE;
  language: string;
}

export const setLanguage = (language: string) => ({
  type: SET_LANGUAGE,
  language,
} as SetLanguage);
