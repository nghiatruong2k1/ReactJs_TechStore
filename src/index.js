import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';

import { BrowserRouter }from'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import FontsGlobal from '~/fonts';
import StylesGlobal from '~/styles';
import StateGlobal from '~/states';
import MessageProvider from '~/screens/Message';
ReactDOM.render(
  <BrowserRouter>
    <CookiesProvider>
      <FontsGlobal>
        <StylesGlobal>
          <MessageProvider>
            <StateGlobal>
               <App/>
            </StateGlobal>
          </MessageProvider>
        </StylesGlobal>
      </FontsGlobal>
    </CookiesProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
