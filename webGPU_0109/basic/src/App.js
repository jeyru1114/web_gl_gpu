import logo from './logo.svg';
import './App.css';
import Box from './components/Box';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        안녕하세요
      </header>
      <Box address="포항" className="은영" age="30"/>
    </div>
  );
}

export default App;
