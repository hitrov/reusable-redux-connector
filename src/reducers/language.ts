import { SetLanguage } from "../actions";

export const SET_LANGUAGE = 'SET_LANGUAGE';

const language = (state = 'de', action: SetLanguage): string => {
  switch (action.type) {
    case SET_LANGUAGE:
      return action.language;
    default:
      return state;
  }
};

export default language;
