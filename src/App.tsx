
import { useState } from "react";

// 1. Починить инпуты;
// 2. Сделать так что бы инпуты добавлялись

const inputNames : any = { 
  bobName1 : String, 
  bobName2 : String, 
  notBobName1 : String, 
  notBobName2 : String 
}

export default function App() {

  const [inputValue, setInputValue ] = useState<typeof inputNames>({ 
    bobName1 : 'bob', 
    bobName2 : 'bob', 
    notBobName1 : 'not bob', 
    notBobName2 : 'not bob' 
  })
  const handleSubmit = () => {

  };

  const handleChange = (e : React.SyntheticEvent) : void => {
    const target : any = e.target;
    const name = target.name;
    setInputValue({
      [name]: target.value
    })


  }

  return (
    <div className="App">
      <h2>Bob Form</h2>
      <form>
          <div>
        <input type="text" 
        value={inputValue.bobName1} 
        name="bobName1"
        onChange={(e) => handleChange(e)}
        />
        <button type="button">Remove input</button>
      </div>
      <div>
        <input   onChange={(e) => handleChange(e)} type="text" value={inputValue.notBobName1} name="notBobName1"/>
        <button type="button">Remove input</button>
      </div>
      <div>
        <input   onChange={(e) => handleChange(e)} type="text" value={inputValue.bobName2} name="bobName2" />
        <button type="button">Remove input</button>
      </div>
      <div>
        <input   onChange={(e) => handleChange(e)} type="text" value={inputValue.notBobName1}  name="notBobName2"/>
        <button type="button">Remove input</button>
      </div>
      <div className="controls">
        <button type="button">Add input</button>
        <button onClick={handleSubmit} type="button">
          Submit values
        </button>
      </div>
      </form>
    </div>
  );
}
