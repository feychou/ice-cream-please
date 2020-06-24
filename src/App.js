import React from 'react';
import { IceCream } from 'react-kawaii';
import { useSelector } from 'react-redux';

import Colors from './features/colors/Colors'
import { selectActiveColor } from './features/colors/colorsSlice';
import './App.css';

function App() {
  const activeColor = useSelector(selectActiveColor);

  return (
    <div className="App">
      <div className="IceCream">
        <IceCream size={400} color={activeColor.id} />
      </div>
      <Colors />
      <div className="Moods">
      </div>
    </div>
  );
}

export default App;
