
import { useGame } from "../context/GameContext";

const Welcome = () => {
  const { startGame } = useGame();

  return (
    <section className="welcome">
      <h1>Whack a Mole</h1>
      <p>Click the mole to earn points!</p>
      <p>Try to get as many points as you can.</p>
      <button onClick={startGame}>Play</button>
    </section>
  );
};

export default Welcome;

