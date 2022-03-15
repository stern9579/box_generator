import React, { useState } from 'react'
import Form from './components/form'
import Box from './components/boxes'


function App() {
  const [boxes, setBoxes] = useState([]);

  const AddBox = (newBox) => {
    setBoxes([...boxes, newBox]);
  }

  return (
    <div className="App">
      <Form AddBox={AddBox} />
      <Box boxes={boxes} AddBox={AddBox} />
    </div>
  );
}

export default App;
