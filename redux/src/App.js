import React from 'react';
import { Provider } from 'react-redux';

import store from './store/store';



const App = () => {
  return (
    <Provider store={store}>
      <div>Działa</div>
    </Provider>
  );
}
 
export default App;