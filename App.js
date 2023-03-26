import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Cart from "./src/component/cart/Cart";
import Home from "./src/component/Home/Home";
import Navbar from "./src/component/Navbar/Navbar";
import Page from "./src/component/Prouductpage/Page";
import store from "./src/store/store";

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <Outlet />
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/prductpage",
        element: <Page />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
