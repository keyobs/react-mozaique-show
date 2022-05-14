import './styles/mozaique.css';

import { CSSProperties, useEffect, useState, ReactElement } from 'react';

interface MozaiqueProps {
  frontElement: ReactElement | Element;
  backElement: ReactElement | Element;
  numberOfCards: number;
}

const Mozaique = (props: MozaiqueProps) => {
  const { frontElement, backElement, numberOfCards } = props;
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
        {[...Array(numberOfCards).keys()].map((el, index) => (
          <Card
            key={index}
            isFlipped={index === cardToFlip}
            frontElement={frontElement}
            backElement={backElement}
          />
        ))}
      </div>
    </div>
  );
};

export default Mozaique;

const Card = (props: {
  frontElement: ReactElement | Element;
  backElement: ReactElement | Element;
  isFlipped: boolean;
}) => {
  const { isFlipped, frontElement, backElement } = props;
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  const frontRotateY = `rotateY(${isFlipped || isHovered ? 180 : 0}deg)`;
  const backRotateY = `rotateY(${isFlipped || isHovered ? 0 : -180}deg)`;

  const styles: Record<string, CSSProperties> = {
    container: {
      backgroundColor: 'transparent',
      perspective: 1000,
    },
    inner: {
      height: '100%',
      width: '100%',
      position: 'relative',
    },
    front: {
      height: '100%',
      width: '100%',
      left: '0',
      top: '0',
      backfaceVisibility: 'hidden',
      WebkitBackfaceVisibility: 'hidden',
      position: isFlipped ? 'absolute' : 'relative',
      transformStyle: 'preserve-3d',
      transform: frontRotateY,
      transition: '0.8s',
    },
    back: {
      height: '100%',
      width: '100%',
      left: '0',
      top: '0',
      backfaceVisibility: 'hidden',
      WebkitBackfaceVisibility: 'hidden',
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
          {frontElement}
        </div>

        <div id='backCard' style={styles.back}>
          {backElement}
        </div>
      </div>
    </div>
  );
};
