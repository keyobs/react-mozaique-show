import React from 'react';
import Mozaique from './components/Mozaique';

import { FrontCard, BackCard } from './components/Card';
import { spaceships } from './components/mockups';

function App() {
  return (
    <>
      <Mozaique
        frontElement={<FrontCard />}
        backElement={<BackCard />}
        numberOfCards={spaceships.length}
      />
    </>
  );
}

export default App;
