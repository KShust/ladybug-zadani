import { useState } from 'react';
import Ladybug from './components/Ladybug';
import type { Direction } from './components/Ladybug';
export interface LadybugState {
  posX: number;
  posY: number;
  orientation: Direction;
}

const STEP_SIZE = 25;

export const App = () => {
  //const [posX, setPosX] = useState<number>(100);
  //const [posY, setPosY] = useState<number>(100);
  //const [orientation, setOrientation] = useState<Direction>('right');

  const [ladybugState, setLadybugState] = useState<LadybugState>({
    posX: 100,
    posY: 100,
    orientation: 'right',
  });

  const handleKeyUp = ({ code }:React.KeyboardEvent<HTMLDivElement>) => {
    /*if (code === 'ArrowUp') {
      setOrientation('up');
      setPosX(posX - STEP_SIZE);
    } else if (code === 'ArrowLeft') {
      setOrientation('left');
      setPosY(posY - STEP_SIZE);
    } else if (code === 'ArrowRight') {
      setOrientation('right');
      setPosY(posY + STEP_SIZE);
    } else if (code === 'ArrowDown') {
      setOrientation('down');
      setPosX(posX + STEP_SIZE);
    }*/
    setLadybugState((ladybugState) => {
      if (code === 'ArrowUp') {
        return {
          ...ladybugState,
          orientation: 'up',
          posY: ladybugState.posY - STEP_SIZE,
        };
      } else if (code === 'ArrowLeft') {
        return {
          ...ladybugState,
          orientation: 'left',
          posX: ladybugState.posX - STEP_SIZE,
        };
      } else if (code === 'ArrowRight') {
        return {
          ...ladybugState,
          orientation: 'right',
          posX: ladybugState.posX + STEP_SIZE,
        };
      } else if (code === 'ArrowDown') {
        return {
          ...ladybugState,
          orientation: 'down',
          posY: ladybugState.posY + STEP_SIZE,
        };
      } else {
        return ladybugState;
      }
    })
  };

  return (
    <div
      tabIndex={-1}
      className="field"
      onKeyDown={handleKeyUp}
    >
      <header>Kliknutím kamkoliv začneš hru</header>
      <Ladybug state={ladybugState} />
    </div>
  );
};

export default App;
