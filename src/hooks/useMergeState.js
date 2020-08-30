import {useState} from 'react';

export default (initState = {}) => {
  const [state, setState] = useState(initState);

  const mergeState = (newState) => {
    setState((oldState) => ({
      ...oldState,
      ...newState,
    }));
  };

  const emptyState = () => {
    setState({});
  };

  return [state, mergeState, emptyState];
};
