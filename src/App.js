// import logo from './logo.svg';
import './App.css';
import CountDownClock from './CountDownClock';
import Counter from './Counter';
import CounterIncerementDecrement from './CounterIncerementDecrement';
import StopWatch from './StopWatch';

function App() {
  return (
    <div className="App">
      <h6>Task 1</h6>
      <Counter/>
      <hr/>
      <h6>task 2</h6>
      <CounterIncerementDecrement/>
      <h6>TASK 3 : CountDown</h6>
      <CountDownClock/>
      <h6>stop watch</h6>
      <StopWatch/>
    </div>
  );
}

export default App;
