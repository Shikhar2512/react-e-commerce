import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { Provider } from 'react-redux';
import { store, persister } from './store/store';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from './utils/stripe/stripe.utils';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Spinner from './components/loading/spinner.component';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Provider store={store}>
      <PersistGate persistor={persister} loading={<Spinner />}>
        <BrowserRouter>
          <Elements stripe = {stripePromise}>{/*   we have to pass something to it so that it can know it is register to us */}
            <App />
          </Elements>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
