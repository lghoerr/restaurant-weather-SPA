import React, { useState, createContext } from "react";

const CoordsContext = createContext();

export default function CoordsProvider({ children }) {
  const [coords, setCoords] = useState([0, 0]);

  return (
    <CoordsContext.Provider value={{ coords, setCoords }}>
      {children}
    </CoordsContext.Provider>
  );
}
export { CoordsContext };
