import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Todoitem = (props) => {
  const {
    todo,
    handleCheck,
    handleDestroy,
  } = props;

  return (
    <li className={classNames({ completed: todo.completed })}>
      <div className="view">
        <input
          type="checkbox"
          className="toggle"
          id="todo-1"
          checked={todo.completed}
          onChange={event => handleCheck(event, todo)}
        />
        <label htmlFor="todo-1">{todo.todoTitle}</label>
        <button
          type="button"
          className="destroy"
          onClick={() => handleDestroy(todo)}
        />
      </div>
    </li>
  );
};

Todoitem.propTypes = {
  todo: PropTypes.string,
  handleCheck: PropTypes.func,
  handleDestroy: PropTypes.func,
}.isRequaired;

export default Todoitem;
