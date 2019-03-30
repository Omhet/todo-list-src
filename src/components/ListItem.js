import React, { Component } from 'react';
import injectSheet from 'react-jss';
import {
  borderColor,
  fontColor,
  addButtonColor,
  fontWeakColor
} from '../colors';

class ListItem extends Component {
  state = {
    isDone: false
  };

  render() {
    const { isDone } = this.state;
    const { classes, text, index, onDeleteClick } = this.props;
    const doneClass = isDone ? 'done' : '';
    return (
      <li className={classes.main}>
        <input
          onChange={e => this.setState({ isDone: e.target.checked })}
          className={classes.check}
          type="checkbox"
          checked={isDone}
        />
        <span className={`${classes.text} ${doneClass}`}>{text}</span>
        <button
          onClick={() => onDeleteClick(index)}
          className={classes.deleteButton}
        >
          X
        </button>
      </li>
    );
  }
}

const style = {
  main: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: `1px solid ${borderColor}`,
    padding: '32px 0'
  },
  text: {
    color: fontColor,
    fontSize: 16,
    textDecoration: 'none',
    '&.done': {
      textDecoration: 'line-through',
      color: fontWeakColor
    }
  },

  check: {
    position: 'relative',
    cursor: 'pointer',
    width: 16,
    height: 16,
    borderRadius: 3,
    outline: 'none',
    margin: 0,
    marginRight: 16,
    marginLeft: 32,
    border: `1px solid ${fontWeakColor}`,
    appearance: 'none',
    '&::after': {
      position: 'absolute',
      content: '"✔"',
      fontSize: 12,
      color: 'white',
      left: 2,
      top: -2
    },
    '&:checked': {
      backgroundColor: addButtonColor
    }
  },
  deleteButton: {
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    color: fontWeakColor,
    marginLeft: 'auto',
    marginRight: 54,
    '&:hover': {
      color: addButtonColor
    }
  }
};

export default injectSheet(style)(ListItem);
