import React, {Component} from 'react';

interface BookProps {
    key: string;
    title: string;
}

export default class Book extends Component<BookProps> {
  render() {
    return (
        <div className="answer">
            <h4>{ this.props.title }</h4>
        </div>
    );
  }
}
