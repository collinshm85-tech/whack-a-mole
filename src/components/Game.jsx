
import { useGame } from "../context/GameContext";
import Hole from "./Hole";

const Game = () => {
  const { score, restartGame } = useGame();

  const holes = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <section className="game">
      <h1>Whack a Mole</h1>
      <h2>Score: {score}</h2>
      <button onClick={restartGame}>Restart</button>

      <div className="holes">
        {holes.map((number) => (
          <Hole key={number} number={number} />
        ))}
      </div>
    </section>
  );
};

export default Game;
