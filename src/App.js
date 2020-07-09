import React from 'react';
import PaymentDetailsForm from './components/PaymentDetailsForm/PaymentDetailsForm';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>

          <Switch>
            <Route exact path='/'>
              <PaymentDetailsForm />
            </Route>
            <Route path='/history'>
              {/* <TransactionHistory /> */}
              <h1>History</h1>
            </Route>
            <Route path='/refund'>
              {/* <RefundForm /> */}
              <h1>Refund</h1>
            </Route>
            <Route path='/transactionresult'>
              <h1>Success?Failure?</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <PaymentDetailsForm />
//     </div>
//   );
// }

export default App;
