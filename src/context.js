import React, { createContext, useState, useEffect } from "react";

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [updateLikes, setUpdateLikes] = useState(() => {
    // Retrieve the state from localStorage if it exists
    const savedState = localStorage.getItem("updateLikes");
    return savedState ? JSON.parse(savedState) : false;
  });

  useEffect(() => {
    localStorage.setItem("updateLikes", JSON.stringify(updateLikes));
  }, [updateLikes]);

  return (
    <MyContext.Provider value={{ updateLikes, setUpdateLikes }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
