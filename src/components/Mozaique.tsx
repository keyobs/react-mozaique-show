import './styles/mozaique.css';

import { spaceships } from "./mockups";



const Mozaique = () => {

return (
  <div className='mozaiqueContainer'>
    <Card />
  </div>
  );
}

export default Mozaique;




const Card = () => {

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
