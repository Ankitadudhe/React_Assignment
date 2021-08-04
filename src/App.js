import logo from './logo.svg';
import './App.css';
import Session1 from './session1'
// import Todo from './session1/todo';
import Expense from './expense'
function App() {
  return (
    <div className="App">
      {/* <h1>Todos</h1>
      <Session1 text="Learn react"/> */}
      <Expense/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
