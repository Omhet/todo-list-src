import React, { Component } from 'react';
import injectSheet from 'react-jss';
import List from './components/List';
import { appColor, addButtonColor } from './colors';
import Header from './components/Header';

const initTodos = ['Wake up', 'Go to school', 'Work'];

class App extends Component {
  state = {
    currentTodo: '',
    todos: initTodos
  };

  componentDidMount() {
    window.addEventListener('keyup', 
      (e) => {
        if (e.keyCode === 13) {
          this.handleAddButtonClick();
        }
      }
    );
  }

  render() {
    const { todos, currentTodo } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.main}>
        <Header onInputChange={this.handleInputChange} count={todos.length} inputValue={currentTodo} />
        <List todos={todos} onDeleteClick={this.handleDeleteClick} />
        <button
          className={classes.addButton}
          onClick={this.handleAddButtonClick}
        >
          +
        </button>
      </div>
    );
  }

  handleInputChange = e => {
    this.setState({ currentTodo: e.target.value });
  };

  handleAddButtonClick = () => {
    const todo = this.state.currentTodo;
    if (todo) {
      this.setState({ todos: [...this.state.todos, todo], currentTodo: '' });
    }
  };

  handleDeleteClick = (index) => {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({ todos });
  };
}

const style = {
  main: {
    width: 512,
    height: 600,
    backgroundColor: appColor,
    borderRadius: 8,
    position: 'relative',
    boxShadow: '0 0 16px 8px rgba(0, 0, 0, 0.2)'
  },
  addButton: {
    width: 64,
    height: 64,
    backgroundColor: addButtonColor,
    color: 'white',
    fontSize: 24,
    borderRadius: '50%',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    transition: 'all .3s',
    position: 'absolute',
    top: 80,
    right: 32,
    '&:hover': {
      borderRadius: '20%'
    }
  }
};

export default injectSheet(style)(App);
