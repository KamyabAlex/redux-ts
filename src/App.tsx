import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, State } from "./redux";
import { bindActionCreators } from "redux";

const App = () => {
  const disptach = useDispatch();

  const { depositMoney, Bankrupt, withdrawMoney } = bindActionCreators(
    actionCreators,
    disptach
  );
  const amount = useSelector((state: State) => state.bank);

  return (
    <div className="App">
      <h1>{amount}</h1>
      <button onClick={(e) => depositMoney(10)}> Deposit</button>
      <button onClick={(e) => withdrawMoney(10)}>Withdraw</button>
      <button onClick={(e) => Bankrupt()}>Bankrupt</button>
    </div>
  );
};

export default App;
