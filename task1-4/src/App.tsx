import './styles/App.css';
import CounterApp from './components/CounterApp/CounterApp';
import TodoApp from './components/TodoApp/TodoApp';
import WeatherApp from './components/WeatherApp/WeatherApp';

function App() {
  return (
    <div className="App">
      <h1>Hollow, World!</h1>
      <div className='counterApp'>
        <CounterApp />
      </div>
      <div className='todoApp'>
        <TodoApp />
      </div>
      <div className='WeatherApp'>
        <WeatherApp />
      </div>
    </div>
  );
}

export default App;
