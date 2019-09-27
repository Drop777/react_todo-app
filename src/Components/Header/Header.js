import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  const {
    todo,
    handleChange,
    handleSubmit,
  } = props;

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        type="text"
        className="new-todo"
        placeholder="What needs to be done?"
        value={todo}
        onChange={handleChange}
        onKeyUp={(event) => {
          if (event.keyCode === 13) {
            handleSubmit(todo);
          }
        }}
      />
    </header>
  );
};

Header.propTypes = {
  todo: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
}.isRequaired;

export default Header;
