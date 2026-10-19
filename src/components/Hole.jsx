
import { useGame } from "../context/GameContext";

const Hole = ({ number }) => {
  const { mole, hitMole } = useGame();

  return (
    <div
      className={number === mole ? "hole mole" : "hole"}
      onClick={number === mole ? hitMole : undefined}
    ></div>
  );
};

export default Hole;
