import React from 'react';
import { IceCream } from 'react-kawaii'
import Colors from './features/colors/Colors'

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="IceCream">
        <IceCream  size={400} />
      </div>
      <Colors />
      <div className="Moods">
      </div>
    </div>
  );
}

export default App;
