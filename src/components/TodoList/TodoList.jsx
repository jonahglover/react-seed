import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function TodoListComponent({ todos }) {
  return (
    <ul>
      {todos.map(todo =>
        <li key={todo.id}>{todo.text}</li>,
      )}
    </ul>
  );
}

TodoListComponent.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

function mapStateToProps(state) {
  return {
    todos: state.todos,
  };
}

const TodoList = connect(
  mapStateToProps,
)(TodoListComponent);

export default TodoList;
