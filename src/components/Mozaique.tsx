import './styles/mozaique.css';

import { spaceships } from './mockups';
import {ISpaceships} from '../interfaces/interfaceSpaceships';



const Mozaique = () => {

return (
  <div className='mozaiqueContainer'>
    {spaceships.map(spaceship => (
      <Card spaceship={spaceship}/>
    ))}
  </div>
  );
}

export default Mozaique;




const Card = (props: {spaceship: ISpaceships}) => {
  const {spaceship} = props;

  return (
      <div className='flipCard'>
          <div className='flipCardInner'>

              <div className='flipCardFront'>
              </div>
            
              <div className='flipCardBack'>
              </div>
          
          </div>
      </div>
  );
};
