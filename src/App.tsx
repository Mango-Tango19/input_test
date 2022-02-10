import "./styles.css";

// 1. Починить инпуты;
// 2. Сделать так что бы инпуты добавлялись

export default function App() {
  const handleSubmit = () => {};

  return (
    <div className="App">
      <h2>Bob Form</h2>
      <div>
        <input type="text" value="bob" />
        <button type="button">Remove input</button>
      </div>
      <div>
        <input type="text" value="не bob" />
        <button type="button">Remove input</button>
      </div>
      <div>
        <input type="text" value="bob" />
        <button type="button">Remove input</button>
      </div>
      <div>
        <input type="text" value="не bob" />
        <button type="button">Remove input</button>
      </div>
      <div className="controls">
        <button type="button">Add input</button>
        <button onClick={handleSubmit} type="button">
          Submit values
        </button>
      </div>
    </div>
  );
}
