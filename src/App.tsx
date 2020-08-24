import React from 'react';
import './App.css';
import { Content } from "./Content";
import { ConnectedProps, connect } from "react-redux";
import { RootState } from "./reducers";
import { setLanguage } from './actions';

const mapStateToProps = (state: RootState) => ({
  language: state.language,
});

const mapDispatch = {
  setLanguage,
};

const connector = connect(mapStateToProps, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

function getConnectedComponent(Component: React.ComponentType) {
  return connector(Component);
}

// const ConnectedContent = getConnectedComponent(Content);
const ConnectedContent = connector(Content);

interface LoadingProps {
  loading?: boolean;
}

const withLoading = <P extends {}>(Component: React.ComponentType<P>) => (props: P & LoadingProps) => (
  <>
    {props.loading && <div>Loading</div>}
    <Component {...props as P} />
  </>
);

const ContentWithLoading = withLoading(Content);

// function App() {
//   return (
//     <ContentWithLoading language={'ru'} loading={true} />
//   );
// }

function App() {
  return (
    <ConnectedContent />
  );
}

export default App;
