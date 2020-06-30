import React from 'react';
import { Provider } from "react-redux";
import store from "./redux/store";
import './App.css';
import BookContainer from './components/bookContainer'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <BookContainer />
        </header>
      </div>
    </Provider>
  );
}

export default App;
