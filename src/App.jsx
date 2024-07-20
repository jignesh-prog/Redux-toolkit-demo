import Add from "./components/Add";
import Todos from "./components/Todos";
import { Provider } from "react-redux";
import { store } from "./app/store";
function App() {
  return (
    <Provider store={store}>
      <Add />
      <Todos />
    </Provider>
  );
}

export default App;
