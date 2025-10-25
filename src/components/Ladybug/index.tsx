import './style.css';
import type { LadybugState } from '../../App';

export type Direction = 'up' | 'right' | 'down' | 'left';

interface LadybugProps {
  /*posX: LadybugState['posX'];
  posY: LadybugState['posY'];
  orientation: LadybugState['orientation'];*/
  state: LadybugState;
}

export const Ladybug = ({ state }: LadybugProps) => {
  return (
    <div
      className={`ladybug ladybug--${state.orientation}`}
      style={{
        top: `${state.posY}px`,
        left: `${state.posX}px`,
      }}
    />
  );
};

export default Ladybug;