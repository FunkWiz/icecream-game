import React, { useState } from "react";
import Game from "./components/Game";
import Layout from "./components/Layout";
import Start from "./components/Start";
import PreGame from "./components/PreGame";
import End from "./components/End";
import ThankYou from "./components/ThankYou";

const StageMap = {
  start: Start,
  game: Game,
  preGame: PreGame,
  end: End,
  thankYou: ThankYou
};

function App() {
  const [stage, setStage] = useState('start');
  const StageComponent = StageMap[stage];

  const handleNext = nextStage => {
    setStage(nextStage);
  }

  return (
    <div>
      <Layout showDecorations={stage !== 'game'}>
        <StageComponent
          onNext={handleNext}
        />
      </Layout>
    </div>
  );
}

export default App;
