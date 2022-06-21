import { Provider } from "react-redux";

// store
import store from "./store";

import Home from "./pages/home"
import UserInfo from './pages/userInfo'
import About from "./pages/about/";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <Home />
        <br />
        <UserInfo />
        <br />
        <About />
      </div>
    </Provider>
  );
};

export default App;
