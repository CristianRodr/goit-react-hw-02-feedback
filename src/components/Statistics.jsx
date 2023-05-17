import { Component } from 'react';
import style from '../App.module.css';
import { logRoles } from '@testing-library/react';
import { nanoid } from 'nanoid';

class Statistics extends Component {
  static defaultProps = {
    stat: { good: 0, neutral: 0, bad: 0 },
    total: 0,
  };

  render() {
    return (
      <div className={style['sub-title']}>
        <ul>
          {
            Object.entries(this.props.stat).map(([key, value]) => {
              return (
                <li key={nanoid()}><span>{key}: {value}</span></li>
              );
            })}
          <li key={nanoid()}><span>Total: {this.props.total}</span></li>
          <li key={nanoid()}><span>Positive feedback: {this.props.percentage}%</span></li>
        </ul>
      </div>
    );
  }
}

export default Statistics;
