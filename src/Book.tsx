import React, {Component} from 'react';

interface BookProps {
    key: string;
    title: string;
    onClick: (title: string) => void
}

export default class Book extends Component<BookProps> {
  render() {
      const title = this.props.title;

      return (
        <div className="answer" onClick={() => this.props.onClick(title)}>
            <h4>{ title }</h4>
        </div>
    );
  }
}
