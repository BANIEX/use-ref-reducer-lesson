import React, { useEffect, useReducer, useState } from "react";

import reducer from "./reducers/reducer";

const initialState = {
  people: [],
  modal: false,
  modalContent: "",
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [user, setUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      dispatch({ type: "NO-INPUT" });
      return;
    }
    dispatch({ type: "ADD-USER", payload: user });
    setUser("");
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      dispatch({ type: "CLOSE-MODAL" });
    }, 3000);
    return () => clearTimeout(timeOut);
  }, [state.modal]);

  return (
    <header>
      <div>
        <form
          onSubmit={handleSubmit}
          style={{ width: "80%", margin: "0 auto" }}
        >
          <div style={{ width: "80%", margin: "0 auto" }}>
            {state.modal && <p>{state.modalContent}</p>}
            <input
              type="text"
              name="user"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              autoComplete="off"
            />
            <button type="submit">submit</button>
          </div>
        </form>
      </div>
      <div>
        {state.people.map((person, index) => (
          <p key={index}>{person}</p>
        ))}
      </div>
    </header>
  );
};

export default UseReducer;
