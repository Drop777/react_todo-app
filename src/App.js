import React from 'react';
import Header from './Components/Header/Header';
import Todoslist from './Components/Todoslist/Todoslist';
import Footer from './Components/Footer/Footer';

class App extends React.Component {
  state = {
    todo: '',
    currentIndex: 0,
    todosList: [],
    filteredTodosList: [],
    filterField: 'all',
  };

  handleChange = ({ target }) => {
    const { value } = target;

    this.setState({
      todo: value,
    });
  }

  handleSubmit = (todo, currentIndex) => {
    if (todo) {
      const todoItem = {
        todoTitle: todo,
        id: currentIndex,
        completed: false,
      };

      this.setState(prevState => ({
        ...prevState,
        todo: '',
        currentIndex: prevState.currentIndex + 1,
        todosList: [...prevState.todosList, todoItem],
        filteredTodosList: [...prevState.todosList, todoItem],
      }));
    }
  };

  handleCheck = (
    { target }, todoItem, filterField, showActiveTodos, showCompletedTodos
  ) => {
    this.setState(prevState => ({
      todosList: prevState.todosList.map((todo) => {
        if (todo.id === todoItem.id) {
          return { ...todo, completed: target.checked };
        }

        return todo;
      }),
      filteredTodosList: prevState.filteredTodosList.map((todo) => {
        if (todo.id === todoItem.id) {
          return { ...todo, completed: target.checked };
        }

        return todo;
      }),
    }));

    if (filterField === 'active') {
      showActiveTodos();
    } else if (filterField === 'completed') {
      showCompletedTodos();
    }
  }

  handleRemove = (todoItem) => {
    this.setState(prevState => ({
      todosList: prevState.todosList.filter((todo) => {
        if (todo.id === todoItem.id) {
          return false;
        }

        return true;
      }),
      filteredTodosList: prevState.todosList.filter((todo) => {
        if (todo.id === todoItem.id) {
          return false;
        }

        return true;
      }),
    }));
  }

  showAllTodos = () => {
    this.setState(prevState => ({
      filteredTodosList: prevState.todosList,
      filterField: 'all',
    }));
  }

  showActiveTodos = () => {
    this.setState(prevState => ({
      filteredTodosList:
        prevState.todosList.filter(todo => todo.completed === false),
      filterField: 'active',
    }));
  }

  showCompletedTodos = () => {
    this.setState(prevState => ({
      filteredTodosList:
        prevState.todosList.filter(todo => todo.completed === true),
      filterField: 'completed',
    }));
  }

  toggleCompleted = ({ target }) => {
    this.setState(prevState => ({
      filteredTodosList:
        prevState.filteredTodosList
          .map(todo => ({ ...todo, completed: target.checked })),
      todosList:
        prevState.todosList
          .map(todo => ({ ...todo, completed: target.checked })),
    }));
  }

  deleteAllCompleted = () => {
    this.setState(prevState => ({
      filteredTodosList:
        prevState.todosList.filter(todo => todo.completed === false),
      todosList: prevState.todosList.filter(todo => todo.completed === false),
    }));
  }

  render() {
    const {
      todosList, todo, filteredTodosList, filterField, currentIndex,
    } = this.state;

    if (todosList.length < 1) {
      return (
        <section className="todoapp">
          <Header
            todo={todo}
            currentIndex={currentIndex}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </section>
      );
    }

    return (
      <section className="todoapp">
        <Header
          todo={todo}
          currentIndex={currentIndex}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Todoslist
          filteredTodosList={filteredTodosList}
          handleCheck={this.handleCheck}
          handleRemove={this.handleRemove}
          toggleCompleted={this.toggleCompleted}
          showActiveTodos={this.showActiveTodos}
          showCompletedTodos={this.showCompletedTodos}
          filterField={filterField}
        />
        <Footer
          filteredTodosList={filteredTodosList}
          filterField={filterField}
          showActiveTodos={this.showActiveTodos}
          showAllTodos={this.showAllTodos}
          showCompletedTodos={this.showCompletedTodos}
          deleteAllCompleted={this.deleteAllCompleted}
        />
      </section>
    );
  }
}

export default App;
