// import logo from './logo.svg';
import './App.css';
import CountDownClock from './CountDownClock';
import Counter from './Counter';
import CounterIncerementDecrement from './CounterIncerementDecrement';

function App() {
  return (
    <div className="App">
      <h6>Task 1</h6>
      <Counter/>
      <hr/>
      <h6>task 2</h6>
      <CounterIncerementDecrement/>
      <CountDownClock/>
    </div>
  );
}

export default App;
