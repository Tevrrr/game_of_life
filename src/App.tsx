import { useContext, useEffect, useState } from 'react';
import { FieldContext } from "./common/Field/FieldContext";
import Field from "./components/Field/Field";


function App() {
    const { randomFillField, pauseToggle } = useContext(FieldContext)


    
  return (
		<div className='App'>
			<button onClick={pauseToggle}>FFF</button>
			<Field />
		</div>
  );
}

export default App;
