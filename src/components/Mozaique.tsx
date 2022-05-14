import './styles/mozaique.css';

import { CSSProperties, useEffect, useState } from 'react';

import { ISpaceships } from '../interfaces/interfaceSpaceships';
import { spaceships } from './mockups';

const Mozaique = () => {
  const numberOfCards = spaceships.length;
  const newCardToFlip = getRandomInteger(0, numberOfCards - 1);

  const [cardToFlip, setCardToFlip] = useState<number | undefined>(undefined);
  const [isBreakOn, setIsBreakOn] = useState<boolean | undefined>(undefined);

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
    const timer = isBreakOn
      ? setTimeout(randomCardToFlip, 1500)
      : setTimeout(putOnBreak, 3500);
    return () => {
      return clearTimeout(timer);
    };
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

const Card = (props: { spaceship: ISpaceships; isFlipped: boolean }) => {
  const { spaceship, isFlipped } = props;
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  const frontRotateY = `rotateY(${isFlipped || isHovered ? 180 : 0}deg)`;
  const backRotateY = `rotateY(${isFlipped || isHovered ? 0 : -180}deg)`;

  const styles: Record<string, CSSProperties> = {
    container: {
      width: 220,
      height: 220,
      backgroundColor: 'transparent',
      border: '1px solid white',
      borderRadius: 10,
      margin: 10,
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
      borderRadius: 10,
      backgroundColor: '#009ddd',
      boxShadow: 'rgb(0 0 0 / 13%) 0px 4px 31px',
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
      width: 'calc(100% - 40px)',
      height: 'calc(100% - 40px)',
      padding: 20,
      borderRadius: 10,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      backgroundColor: '#02b6fe',
      boxShadow: 'rgb(0 0 0 / 13%) 0px 4px 31px',
      backfaceVisibility: 'hidden',
      WebkitBackfaceVisibility: 'hidden',
      left: '0',
      top: '0',
      position: isFlipped ? 'relative' : 'absolute',
      //position: 'absolute',
      transformStyle: 'preserve-3d',
      transform: backRotateY,
      transition: '0.8s',
    },
  };

  return (
    <div id='container' style={styles.container}>
      <div
        id='inner'
        style={styles.inner}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div id='frontCard' style={styles.front}>
          <FrontCard />
        </div>

        <div id='backCard' style={styles.back}>
          <BackCard />
        </div>
      </div>
    </div>
  );
};

const FrontCard = () => {
  return (
    <>
      <div>Front Card</div>
      <div>bim</div>
    </>
  );
};

const BackCard = () => {
  return (
    <>
      <div>Back Card</div>
      <div>hop hop</div>
    </>
  );
};
