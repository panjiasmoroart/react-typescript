import UseEffectComponent from './components/UseEffectComponent';
import UseStateComponent from './components/UseStateComponent';

function App() {
  return (
    <div>
      <h2>Hooks useState</h2>
      <UseStateComponent />

      <h2>Hooks useEffect</h2>
      <UseEffectComponent />
    </div>
  );
}

export default App;
