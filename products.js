import React, { useReducer } from "react";
import "./App.js";

const initialState = { count: 1 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <center>
        Count:{state.count};
        <button onClick={() => dispatch({ type: "increment" })}> + </button>
        <button onClick={() => dispatch({ type: "decrement" })}> - </button>
      </center>
    </>
  );
}

export default App;
