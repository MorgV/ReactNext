import { useState } from "react";
import {
  GameInfo,
  GameTitle,
  GameField,
  useGameState,
} from "../components/game";
import { Header } from "../components/header";

export default function HomePage() {
  const [playersCount] = useState(4);

  const { cells, currentMove, nextMove, handleGameCellClick } =
    useGameState(playersCount);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto w-max">
        <GameTitle playersCount={playersCount} />
        <GameInfo
          className="mt-4 "
          playersCount={playersCount}
          currentMove={currentMove}
        />
        <GameField
          className="mt-6"
          cells={cells}
          currentMove={currentMove}
          nextMove={nextMove}
          handleGameCellClick={handleGameCellClick}
          playersCount={playersCount}
        />
      </main>
    </div>
  );
}
