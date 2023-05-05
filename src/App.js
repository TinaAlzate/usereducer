// import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import LoginUseReducer from './components/LoginUseReducer';
import LoginUseState from './components/LoginUseState';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>useReducer examples</h1>
        {/* <Counter/> */}
        {/* <LoginUseState/> */}
        <LoginUseReducer/>
      </header>
    </div>
  );
}

export default App;
