import { Component } from 'react';
import style from "./FeedbackOptions.module.css"

export class FeedbackOptions extends Component {
  render() {
    return (
      <div className={style.btn}>
        {Object.keys(this.props.options).map( key =>
          <button key={key} type='button'
                  onClick={this.props.onLeaveFeedback}>{key}
          </button>
        )}
      </div>
    );
  }
}
