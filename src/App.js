import React, { Component } from 'react';
import injectSheet from 'react-jss';
import List from './components/List';
import { appColor, addButtonColor, fontWeakColor } from './colors';
import Header from './components/Header';

class App extends Component {
  state = {
    currentTodo: '',
    todos: []
  };

  componentDidMount() {
    window.addEventListener('keyup', e => {
      if (e.keyCode === 13) {
        this.handleAddButtonClick();
      }
    });
  }

  render() {
    const { todos, currentTodo } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.main}>
        <Header
          onInputChange={this.handleInputChange}
          count={todos.length}
          inputValue={currentTodo}
        />
        {todos.length ? (
          <List todos={todos} onDeleteClick={this.handleDeleteClick} />
        ) : (
          <div className={classes.empty}>No todos yet</div>
        )}
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

  handleDeleteClick = index => {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({ todos });
  };
}

const style = {
  main: {
    width: 512,
    maxHeight: 608,
    backgroundColor: appColor,
    borderRadius: 8,
    position: 'relative',
    boxShadow: '0 0 16px 8px rgba(0, 0, 0, 0.2)',
    '@media (max-width: 512px)': {
      width: '100vw',
      height: '100vh'
    }
  },
  empty: {
    paddingBottom: 32,
    paddingLeft: 32,
    marginTop: -48,
    color: fontWeakColor,
    fontSize: 24
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
    },
    '@media (max-width: 512px)': {
      width: 48,
      height: 48,
      top: 88
    }
  }
};

export default injectSheet(style)(App);
