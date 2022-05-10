import './styles/mozaique.css';

import {useEffect, useState} from 'react';

import {ISpaceships} from '../interfaces/interfaceSpaceships';
import {spaceships} from './mockups';

const Mozaique = () => {
  const numberOfCards = spaceships.length;
  const newCardToFlip = getRandomInteger(0, numberOfCards);

  const [cardToFlip, setCardToFlip] = useState<number | undefined>(undefined);
  const [isBreakOn, setIsBreakOn] = useState<boolean>(false);

  function getRandomInteger(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function randomCardToFlip() {
    setCardToFlip(newCardToFlip);
    setIsBreakOn(!isBreakOn);
  }

  function putOnBreak() {
    setIsBreakOn(!isBreakOn);
    setCardToFlip(undefined);
  }

  useEffect(() => {
    if (!isBreakOn) setTimeout(randomCardToFlip, 1500);
  }, [isBreakOn]);


  useEffect(() => {
    if (isBreakOn) setTimeout(putOnBreak, 3500);
  }, [isBreakOn]);


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




const Card = (props: {spaceship: ISpaceships; isFlipped: boolean}) => {
  const {spaceship, isFlipped} = props;


  const frontRotateY = `rotateY(${isFlipped ? 180 : 0}deg)`;
  const backRotateY = `rotateY(${isFlipped ? 0 : -180}deg)`;

  const styles: any = {
    container: {
      width: 220,
      height: 220,
      backgroundColor: 'transparent',
      border: '1px solid white',
      perspective: 1000,
    },
    inner: {
      height: '100%',
      width: '100%',
      position: 'relative',
    },
    front: {
      width: '100%',
      height: '100%',
      backgroundColor: '#009ddd',
      backfaceVisibility: 'hidden',
      WebkitBackfaceVisibility: 'hidden',
      left: '0',
      top: '0',
      position: isFlipped ? 'absolute' : 'relative',
      transformStyle: 'preserve-3d',
      transform: frontRotateY,
      transition: '0.8s',
    },
    back: {
      width: '100%',
      height: '100%',
      backgroundColor: 'orange',
      backfaceVisibility: 'hidden',
      WebkitBackfaceVisibility: 'hidden',
      left: '0',
      top: '0',
      position: isFlipped ? 'relative' : 'absolute',
      transformStyle: 'preserve-3d',
      transform: backRotateY,
      transition: '0.8s',
    },
  };

  return (
    <div style={styles.container} >
      <div style={styles.inner} >

        <div style={styles.front}>
          <div>{spaceship.name}</div>
          {spaceship.model}
        </div>

        <div style={styles.back}>
          crew
        </div>

      </div>
    </div>
  );
};