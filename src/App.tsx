import React from 'react';
import Mozaique from './components/Mozaique';

import { FrontCard, BackCard } from './components/Card';

function App() {
  return <Mozaique frontElement={<FrontCard />} backElement={<BackCard />} />;
}

export default App;
