import React, {Component} from 'react';
import Book from "./Book";

interface TurnProps {
    author: {imageUrl: string};
    books: string[];
    highlight: string;
    onAnswerSelected: (title) => void;
}

export default class Turn extends Component<TurnProps> {
  render() {
    const {author, books, highlight, onAnswerSelected} = this.props;

    return (
        <div className="row turn" style={{backgroundColor: this.highlightToBgColor(highlight)}}>
            <div className="col-4 offset-1">
                <img src={author.imageUrl} className="authorimage" alt="Author"/>
            </div>
            <div className="col-6">
                { books.map(title => <Book title={title} key={title} onClick={onAnswerSelected} />) }
            </div>
        </div>
    );
  }

  highlightToBgColor(highlight: string) {
      const mapping = {
          'none': '',
          'correct': 'green',
          'wrong': 'red'
      };

      return mapping[highlight];
  }
}
