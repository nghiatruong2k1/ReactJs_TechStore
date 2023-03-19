import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import FontsGlobal from '~/fonts';
import StylesGlobal from '~/styles';
import StateGlobal from '~/states';
import MessageProvider from '~/screens/Message';
import LoadingProvider from '~/screens/Loading';
import Routers from './router';
ReactDOM.render(
  <Fragment>
    <FontsGlobal>
      <StylesGlobal>
        <LoadingProvider>
          <MessageProvider>
            <CookiesProvider>
              <StateGlobal>
                <Routers>
                  <App />
                </Routers>
              </StateGlobal>
            </CookiesProvider>
          </MessageProvider>
        </LoadingProvider>
      </StylesGlobal>
    </FontsGlobal>
  </Fragment>,
  document.getElementById('root'),
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
