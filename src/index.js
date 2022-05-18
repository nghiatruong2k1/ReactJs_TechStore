
import ReactDOM from 'react-dom';
import './index.css';
import './config';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter }from'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import App from "./App";
import Provider from "./provider";


ReactDOM.render(
  <BrowserRouter>
    <CookiesProvider>
      <Provider>
        <App />
      </Provider>
    </CookiesProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
