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
    </div>
  );
}

export default App;
