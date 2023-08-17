import React, { createContext, useState } from "react";
const FitnessItems = createContext();
const FitnessContext = ({ children }) => {
  const [completed, setCompleted] = useState([]);
  const [workout, setWorkout] = useState(0);
  const [calories, setCalories] = useState(0);
  const [minuts, setMinuts] = useState(0);
  return (
    <FitnessItems.Provider
      value={{
        completed,
        setCompleted,
        workout,
        setWorkout,
        calories,
        setCalories,
        minuts,
        setMinuts,
    }}
    >
    {children}
    </FitnessItems.Provider>
  );
};
export {FitnessContext,FitnessItems}
