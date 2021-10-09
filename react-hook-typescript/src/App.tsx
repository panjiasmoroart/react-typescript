import CustomHookComponent from './components/CustomHookComponent';
import TestComponent from './components/EvenMoreReactComponent';
import UseContextComponent from './components/UseContextComponent';
import UseEffectComponent from './components/UseEffectComponent';
import UseReducerComponent from './components/UseReducerComponent';
import UseRefComponent from './components/UseRefComponent';
import UseStateComponent from './components/UseStateComponent';

function App() {
  return (
    <div>
      <h3
        style={{
          color: 'blue'
        }}
      >
        Event More React Component
      </h3>
      <TestComponent />

      <h3>Hooks useState</h3>
      <UseStateComponent />

      <h3>Hooks useEffect</h3>
      <UseEffectComponent />

      <h3>Hooks useContext</h3>
      <UseContextComponent />

      <h3>Hooks useReducer</h3>
      <UseReducerComponent />

      <h3>Hooks useRef</h3>
      <UseRefComponent />

      <h3>Custom Hooks</h3>
      <CustomHookComponent />
    </div>
  );
}

export default App;
