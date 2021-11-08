import React from 'react';
import { createContext, useContext, useReducer } from 'react';

const CountContext = createContext();

const countReducer = (state, action) => {
  switch (action.type) {
    case 'increment': {
      return {count: state.count + 1};
    }
    case 'decrement': {
      return {count: state.count - 1};
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

const CountProvider = ({ children }) => {
  // useReducer
  const [state, dispatch] = React.useReducer(countReducer, {count: 0})
  // Make variable `value` and assign state & dispatch
  const value = {state, dispatch}
  return <CountContext.Provider value={value}>{children}</CountContext.Provider>
}

const useCount = () => {
  // fill the default value of useContext
  const context = useContext(CountContext);

  if (context === 'undefined') {
    throw new Error('useCount must be used within a CountProvider')
  }

  return context;
}

export { CountProvider, useCount } 