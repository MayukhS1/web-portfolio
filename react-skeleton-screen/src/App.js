import './App.css';
import Articles from './components/Articles';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Rect Skeleton</h1>
      </header>
      <div className="content">
        <Articles/>
        <User/>
      </div>
    </div>
  );
}

export default App;
