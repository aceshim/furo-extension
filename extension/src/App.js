import './App.css';
import { removeOAuth } from './main';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <button onClick={removeOAuth}>Remove Kakao</button>
      </header>
    </div>
  );
}

export default App;
