import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { inputBorderColor, borderColor, fontWeakColor, fontColor } from '../colors';

class Header extends Component {
  render() {
    const { classes, onInputChange, count, inputValue } = this.props;
    return (
      <div className={classes.main}>
        <input onChange={onInputChange} className={classes.input} type="text" placeholder="Add new to-do" value={inputValue}/>
        <span className={classes.countGroup}><span className={classes.count}>{count}</span> Tasks</span>
      </div>
    );
  }
}

const style = {
  main: {
    height: 112,
    padding: 32,
    display: 'flex',
    borderBottom: `1px solid ${borderColor}`,
    marginBottom: 80
  },
  input: {
    width: 320,
    height: 48,
    borderRadius: 8,
    outline: 'none',
    color: fontColor,
    fontSize: 18,
    paddingLeft: 16,
    border: `1px solid ${inputBorderColor}`,
    '&::placeholder': {
        color: fontWeakColor
    }
  },
  countGroup: {
    marginLeft: 'auto',
    marginRight: 8,
    color: fontWeakColor
  },
  count: {
    color: fontColor
  }
};

export default injectSheet(style)(Header);
