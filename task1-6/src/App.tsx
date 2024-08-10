import './styles/App.css';
import CounterApp from './components/CounterApp/CounterApp';
import TodoApp from './components/TodoApp/TodoApp';
import WeatherApp from './components/WeatherApp/WeatherApp';
import FormValidationApp from './components/FormValidationApp/FormValidationApp'
import ModalApp from './components/ModalApp/ModalApp';

function App() {
  return (
    <div className="App">
      <h1>Hollow, World!</h1>
      <CounterApp />
      <TodoApp />
      <WeatherApp />
      <FormValidationApp />
      <ModalApp />
    </div>
  );
}

export default App;
