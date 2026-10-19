
import { GameProvider, useGame } from "./context/GameContext";
import Welcome from "./components/Welcome";
import Game from "./components/Game";

const AppContent = () => {
  const { playing } = useGame();

  return (
    <>
      {playing ? <Game /> : <Welcome />}
    </>
  );
};

const App = () => {
  return (
    <GameProvider>
      <AppContent />
    </GameProvider>
  );
};

export default App;
