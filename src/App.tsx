import React from 'react';
import './App.css';
import { Content } from "./Content";
import { ConnectedProps, connect } from "react-redux";
import { SetLanguage } from "./actions";
import { RootState } from "./reducers";
import { setLanguage } from './actions';

// type StateProps = Pick<IProps, | 'language'>;
// type DispatchProps = Pick<IProps, | 'setLanguage'>;
// type OwnProps = Omit<
//   IProps,
//   keyof StateProps | keyof DispatchProps
// >;

const mapStateToProps = (state: RootState) => ({
  language: state.language,
});

const mapDispatch = {
  setLanguage,
};

// interface StateProps {
//   language: string;
// }

// interface DispatchProps {
//   setLanguage(language: string): SetLanguage;
// }

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatch;

// const connector = connect<StateProps, DispatchProps, {}, RootState>(mapStateToProps, mapDispatch);
const connector = connect(mapStateToProps, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

const ConnectedContent = connector(Content);

function App() {
  return (
    <ConnectedContent />
  );
}

export default App;
