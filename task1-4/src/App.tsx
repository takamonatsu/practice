import './styles/App.css';
import CounterApp from './components/CounterApp/CounterApp';
import TodoApp from './components/TodoApp/TodoApp';
import WeatherApp from './components/WeatherApp/WeatherApp';

function App() {
  return (
    <div className="App">
      <h1>Hollow, World!</h1>
      <CounterApp />
      <TodoApp />
      <WeatherApp />
    </div>
  );
}

export default App;
