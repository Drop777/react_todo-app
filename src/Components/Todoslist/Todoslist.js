/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import Todoitem from '../Todoitem/Todoitem';

const Todolist = ({
  filteredTodosList,
  handleCheck,
  handleRemove,
  toggleCompleted,
  filterField,
  showActiveTodos,
  showCompletedTodos,
}) => (
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
        .map(todo => <Todoitem key={todo.id} todo={todo} handleCheck={handleCheck} handleRemove={handleRemove} filterField={filterField} showActiveTodos={showActiveTodos} showCompletedTodos={showCompletedTodos} />)}
    </ul>
  </section>
);

Todolist.propTypes = {
  filteredTodosList: PropTypes.arrayOf(PropTypes.shape({
    todoTitle: PropTypes.string,
    id: PropTypes.number,
    completed: PropTypes.bool,
  })),
  handleCheck: PropTypes.func,
  handleRemove: PropTypes.func,
  toggleCompleted: PropTypes.func,
}.isRequaired;

export default Todolist;
