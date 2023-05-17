import { Component } from 'react';
import { nanoid } from 'nanoid';

export class Notification extends Component {
  render() {
    return (
      <>
        <h2 key={nanoid()}>{this.props.message}</h2>
      </>
    );
  }
}
