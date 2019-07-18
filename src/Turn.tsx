import React, {Component} from 'react';
import Book from "./Book";

interface TurnProps {
    author: {imageUrl: string};
    books: string[]
}

export default class Turn extends Component<TurnProps> {
  render() {
    const {author, books} = this.props;

    return (
        <div className="row turn" style={{backgroundColor: 'white'}}>
            <div className="col-4 offset-1">
                <img src={author.imageUrl} className="authorimage" alt="Author"/>
            </div>
            <div className="col-6">
                { books.map(title => <Book title={title} key={title} />) }
            </div>
        </div>
    );
  }
}
