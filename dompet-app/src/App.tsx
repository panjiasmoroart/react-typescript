import { useSelector, useDispatch } from 'react-redux';
import {
  depositMoney,
  withDrawMoney,
  spendMoney
} from './redux/action-creators';
import { State } from './app/store';
import './App.css';

export default function App() {
  const dispatch = useDispatch();
  const bank = useSelector((state: State) => state.bank);
  return (
    <div className="App">
      <div className="box">
        <h1>{bank}</h1>
        <button
          className="App-button blue"
          type="button"
          onClick={() => dispatch(depositMoney(10))}
        >
          Setor Uang
        </button>
        <button
          className="App-button green"
          type="button"
          onClick={() => dispatch(withDrawMoney(5))}
        >
          Tarik Uang
        </button>
        <button
          className="App-button red"
          type="button"
          onClick={() => dispatch(spendMoney())}
        >
          Kosongkan
        </button>
      </div>
    </div>
  );
}
