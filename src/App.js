import './App.css';

function App() {
  return (
    <div className="App">
      <div form-row>
      <form new-item-form><h3>New Item</h3></form>
      <input type="text"></input>
      <button btn>Add</button>
      </div>

      <header>
        <h1>Todo List</h1>
      </header>

      <ul list>
        
         <li>
          <label>
           <input type="checkbox"></input>
          </label>
          Item 1
           <button btn>Delete</button>
         </li>
        
         <li>
          <label>
           <input type="checkbox"></input>
          </label>
          Item 2
           <button btn>Delete</button>
         </li>
        
      </ul>
    </div>
  );
}

export default App;
