import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Footer = ({
  filteredTodosList,
  filterField,
  showActiveTodos,
  showAllTodos,
  showCompletedTodos,
  deleteAllCompleted,
}) => (
  <footer className="footer" style={{ display: 'block' }}>
    <span className="todo-count">
      {`${filteredTodosList.filter(todo => todo.completed === false)
        .length} `}
        items left
    </span>

    <ul className="filters">
      <li>
        <a
          href="#/"
          className={classNames({ selected: filterField === 'all' })}
          onClick={showAllTodos}
        >
        All
        </a>
      </li>

      <li>
        <a
          href="#/active"
          className={classNames({ selected: filterField === 'active' })}
          onClick={showActiveTodos}
        >
        Active
        </a>
      </li>

      <li>
        <a
          href="#/completed"
          className={classNames({ selected: filterField === 'completed' })}
          onClick={showCompletedTodos}
        >
        Completed
        </a>
      </li>
    </ul>

    <button
      type="button"
      className="clear-completed"
      style={{
        display: filteredTodosList.some(todo => todo.completed === true)
          ? 'block'
          : 'none',
      }}
      onClick={deleteAllCompleted}
    >
    Clear completed
    </button>
  </footer>
);

Footer.propTypes = {
  filteredTodosList: PropTypes.arrayOf(PropTypes.shape({
    todoTitle: PropTypes.string,
    id: PropTypes.number,
    completed: PropTypes.bool,
  })),
  filterField: PropTypes.string,
  showActiveTodos: PropTypes.func,
  showAllTodos: PropTypes.func,
  showCompletedTodos: PropTypes.func,
  deleteAllCompleted: PropTypes.func,
}.isRequaired;

export default Footer;
