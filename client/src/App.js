import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Filter } from "./components/Filter/Filter";
import { TickersList } from "./components/TickersList/TickersList";

function App() {
  return (
    <Provider store={store}>
      <Filter />
      <TickersList />
    </Provider>
  );
}

export default App;
