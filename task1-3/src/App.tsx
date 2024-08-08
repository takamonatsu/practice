import './styles/App.css';
import CounterApp from './components/CounterApp/CounterApp';
import ToDoApp from './components/TodoApp/TodoApp';

function App() {
  return (
    <div className="App">
      <h1>Hollow, World!</h1>
      <div className='counterApp'>
        <CounterApp />
        <ToDoApp />
      </div>
    </div>
  );
}

export default App;
