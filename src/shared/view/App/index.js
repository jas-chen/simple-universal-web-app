import React from 'react';
import style from './style.css';

export default class App extends React.Component {
  render() {
    return (
      <main className={style.main}>
        <h1 className={style.h1}>Hello</h1>
        <p>Your number: {this.props.num}</p>
      </main>
    );
  }
}
