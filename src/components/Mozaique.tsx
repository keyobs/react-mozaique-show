import './styles/mozaique.css';

import { useEffect, useState } from 'react';

import { ISpaceships } from '../interfaces/interfaceSpaceships';
import { spaceships } from './mockups';

const Mozaique = () => {
  const [cardToFlip, setCardToFlip] = useState<number | undefined>(undefined);

  function getRandomInteger(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function randomCardToFlip(list: any[]) {
    const numberOfCards = list.length;
    const newCardToFlip = getRandomInteger(0, numberOfCards);
    setCardToFlip(newCardToFlip);
  }

  useEffect(() => {
    setInterval(() => {
      randomCardToFlip(spaceships);
    }, 3500);
  }, []);

  return (
    <div className='mozaiqueContainer'>
      <div className='cardsContainer'>
        {spaceships.map((spaceship, index) => (
          <Card
            key={spaceship.id}
            spaceship={spaceship}
            isFlipped={index === cardToFlip}
          />
        ))}
      </div>
    </div>
  );
};

export default Mozaique;

const Card = (props: { spaceship: ISpaceships; isFlipped: boolean }) => {
  const { spaceship, isFlipped } = props;

  return (
    <div className='flipCard'>
      <div className='flipCardInner'>
        <div id='frontCard'>
          <div>{spaceship.name}</div>
          <div>{spaceship.model}</div>
        </div>

        <div id='backCard'>crew</div>
      </div>
    </div>
  );
};
