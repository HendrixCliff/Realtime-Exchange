import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import store from "../src/redux/store.js"
import { Provider } from 'react-redux'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "../src/routes/ErrorPage.jsx"
import CurrencyContainer from '../src/components/CurrencyContainer.jsx'
import CryptoCurrencyContainer2 from '../src/components/CryptoCurrencyContainer2.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "currency-container",
        element:  <CurrencyContainer />,
      },
      {
        path: "crypto-currency-container",
        element: <CryptoCurrencyContainer2/>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
