import {useState} from 'react';

/**
 * use for cases where we need on-off or true-false (e.g: modal visibility, loading...)
 */
export default (initState = false) => {
  const [state, setState] = useState(initState);

  const toggle = (newState, callback) => {
    if (typeof callback === 'function') {
      callback();
    }
    setState(typeof newState === 'boolean' ? newState : !state);
  };

  return [state, toggle];
};
