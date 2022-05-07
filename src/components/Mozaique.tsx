import './styles/mozaique.css';

import { spaceships } from './mockups';
import { ISpaceships } from '../interfaces/interfaceSpaceships';

const Mozaique = () => {
  return (
    <div className='mozaiqueContainer'>
      <div className='cardsContainer'>
        {spaceships.map((spaceship) => (
          <Card key={spaceship.id} spaceship={spaceship} />
        ))}
      </div>
    </div>
  );
};

export default Mozaique;

const Card = (props: { spaceship: ISpaceships }) => {
  const { spaceship } = props;

  return (
    <div className='flipCard'>
      <div className='flipCardInner'>
        <div className='flipCardFront'>
          <div>{spaceship.name}</div>
          {spaceship.model}
        </div>

        <div className='flipCardBack'></div>
      </div>
    </div>
  );
};
