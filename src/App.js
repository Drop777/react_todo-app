import React from 'react';
import Header from './Components/Header/Header';
import Todoslist from './Components/Todoslist/Todoslist';
import Footer from './Components/Footer/Footer';

let id = 0;

class App extends React.Component {
  state = {
    todo: '',
    todosList: [],
    filteredTodosList: [],
    filterState: '',
  };

  handleChange = ({ target }) => {
    const { value } = target;

    this.setState({
      todo: value,
    });
  }

  handleSubmit = (todo) => {
    if (todo) {
      const todoItem = {
        todoTitle: todo,
        id,
        completed: false,
      };

      id += 1;

      this.setState(prevState => ({
        ...prevState,
        todo: '',
        todosList: [...prevState.todosList, todoItem],
        filteredTodosList: [...prevState.todosList, todoItem],
      }));
    }
  };

  handleCheck = ({ target }, todoItem) => {
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
  }

  handleDestroy = (todoItem) => {
    this.setState(prevState => ({
      todosList: prevState.todosList.filter((todo) => {
        if (todo.id === todoItem.id) {
          return false;
        }

        return todo;
      }),
      filteredTodosList: prevState.todosList.filter((todo) => {
        if (todo.id === todoItem.id) {
          return false;
        }

        return todo;
      }),
    }));
  }

  showAllTodos = () => {
    this.setState(prevState => ({
      filteredTodosList: prevState.todosList,
      filterState: 'all',
    }));
  }

  showActiveTodos = () => {
    this.setState(prevState => ({
      filteredTodosList:
        prevState.todosList.filter(todo => todo.completed === false),
      filterState: 'active',
    }));
  }

  showCompletedTodos = () => {
    this.setState(prevState => ({
      filteredTodosList:
        prevState.todosList.filter(todo => todo.completed === true),
      filterState: 'completed',
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
      todosList,
      todo,
      filteredTodosList,
      filterState,
    } = this.state;

    return (

      <section className="todoapp">
        <Header
          todo={todo}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Todoslist
          todosList={todosList}
          filteredTodosList={filteredTodosList}
          handleCheck={this.handleCheck}
          handleDestroy={this.handleDestroy}
          toggleCompleted={this.toggleCompleted}
        />
        <Footer
          filteredTodosList={filteredTodosList}
          filterState={filterState}
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
