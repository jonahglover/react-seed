import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import TodoList from './../TodoList/TodoList';
import reducer from './../../reducers';

function App() {
  return (
    <Provider store={createStore(reducer)}>
      <div className="App">
        <TodoList
          todos={[{ id: 1, text: 'jonah' }]}
        />
      </div>
    </Provider>
  );
}

export default App;
