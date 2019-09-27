/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import Todoitem from '../Todoitem/Todoitem';

const Todolist = (props) => {
  const {
    filteredTodosList,
    handleCheck,
    handleDestroy,
    toggleCompleted,
  } = props;

  return (
    <section className="main" style={{ display: 'block' }}>
      <input
        type="checkbox"
        id="toggle-all"
        className="toggle-all"
        onClick={event => toggleCompleted(event)}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {filteredTodosList
          // eslint-disable-next-line max-len
          .map(todo => <Todoitem key={todo.id} todo={todo} handleCheck={handleCheck} handleDestroy={handleDestroy} />)}
      </ul>
    </section>
  );
};

Todolist.propTypes = {
  filteredTodosList: PropTypes.arrayOf(PropTypes.object),
  handleCheck: PropTypes.func,
  handleDestroy: PropTypes.func,
  toggleCompleted: PropTypes.func,
}.isRequaired;

export default Todolist;
