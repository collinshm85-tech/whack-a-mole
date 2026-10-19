
import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [playing, setPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [mole, setMole] = useState(0);

  const startGame = () => {
    setScore(0);
    setMole(Math.floor(Math.random() * 9));
    setPlaying(true);
  };

  const restartGame = () => {
    setPlaying(false);
  };

  const hitMole = () => {
    setScore(score + 1);
    setMole(Math.floor(Math.random() * 9));
  };

  return (
    <GameContext.Provider value={{
      playing,
      score,
      mole,
      startGame,
      restartGame,
      hitMole
    }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
