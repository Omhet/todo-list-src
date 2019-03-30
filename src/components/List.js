import React, { Component } from 'react';
import ListItem from './ListItem';
import injectSheet from 'react-jss';

class List extends Component {
  render() {
    const { classes, onDeleteClick } = this.props;
    return (
      <div className={classes.main}>
        <ul className={classes.list}>
          {this.props.todos.map((t, i) => (
            <ListItem key={i} index={i} text={t} onDeleteClick={onDeleteClick}/>
          ))}
        </ul>
      </div>
    );
  }
}

const style = {
    main: {
        overflow: 'auto',
        height: 400
    },
    list: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
  };
  
  export default injectSheet(style)(List);
  