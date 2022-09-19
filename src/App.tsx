import {useContext, useEffect} from 'react'
import { FieldContext } from "./common/Field/FieldContext";
import Field from "./components/Field/Field";


function App() {
    const { randomFillField } = useContext(FieldContext)
    useEffect(()=>{randomFillField()},[])
  return (
      <div className="App">
          <Field />
    </div>
  );
}

export default App;
