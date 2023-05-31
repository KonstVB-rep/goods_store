import Home from "./pages/Home";
import { Header } from "./components/Header";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
