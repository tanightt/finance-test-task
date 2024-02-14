import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Filter } from "./components/Filter/Filter";
import { TickersList } from "./components/TickersList/TickersList";
import { UserList } from "./components/UserList/UserList";
import { Wrapper } from "./App.styled";

function App() {
  return (
    <Provider store={store}>
      <Wrapper>
        <Filter />
        <TickersList />
        <UserList />
      </Wrapper>
    </Provider>
  );
}

export default App;
