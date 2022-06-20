import { Provider } from "react-redux";

// store
import store from "./store";

import Home from "./pages/home"

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <Home />
      </div>
    </Provider>
  );
};

export default App;
