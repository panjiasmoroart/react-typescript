import UseContextComponent from './components/UseContextComponent';
import UseEffectComponent from './components/UseEffectComponent';
import UseReducerComponent from './components/UseReducerComponent';
import UseStateComponent from './components/UseStateComponent';

function App() {
  return (
    <div>
      <h2>Hooks useState</h2>
      <UseStateComponent />

      <h2>Hooks useEffect</h2>
      <UseEffectComponent />

      <h3>Hooks useContext</h3>
      <UseContextComponent />

      <h3>Hooks useReducer</h3>
      <UseReducerComponent />
    </div>
  );
}

export default App;
