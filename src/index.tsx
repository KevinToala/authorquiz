import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter, Route, RouteComponentProps} from 'react-router-dom';

import {shuffle, sample} from 'underscore';
import AddAuthorForm from "./AddAuthorForm/AddAuthorForm";

const authors: {name: string, imageUrl: string, books: string[], imageSource?: string, imageAttribution?: string}[] = [
    {
        name: 'Mark Twain',
        imageUrl: 'images/authors/marktwain.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['The Adventures of Huckleberry Finn']
    },
    {
        name: 'Joseph Conrad',
        imageUrl: 'images/authors/josephconrad.png',
        imageSource: 'Wikimedia Commons',
        books: ['Heart of Darkness']
    },
    {
        name: 'J.K. Rowling',
        imageUrl: 'images/authors/jkrowling.jpg',
        imageSource: 'Wikimedia Commons',
        imageAttribution: 'Daniel Ogren',
        books: ['Harry Potter and the Sorcerers Stone']
    },
    {
        name: 'Stephen King',
        imageUrl: 'images/authors/stephenking.jpg',
        imageSource: 'Wikimedia Commons',
        imageAttribution: 'Pinguino',
        books: ['The Shining', 'IT']
    },
    {
        name: 'Charles Dickens',
        imageUrl: 'images/authors/charlesdickens.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['David Copperfield', 'A Tale of Two Cities']
    },
    {
        name: 'William Shakespeare',
        imageUrl: 'images/authors/williamshakespeare.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['Hamlet', 'Macbeth', 'Romeo and Juliet']
    }
];

function getTurnData(authors: any): {books: any, author: any} {
    const allBooks = authors.reduce((p, c, i) => {
        return p.concat(c.books);
    }, []);
    const fourRandomBooks = shuffle(allBooks).slice(0,4);
    const answer = sample(fourRandomBooks);

    return {
        books: fourRandomBooks,
        author: authors.find((author) =>
            author.books.some((title) =>
                title === answer))
    }
}

function resetState() {
    return {
        turnData: getTurnData(authors),
        highlight: ''
    };
}

let state = resetState();

function onAnswerSelected(answer) {
    const isCorrect = state.turnData.author.books.some(book => book === answer);
    state.highlight = isCorrect ? 'correct' : 'wrong';
    render();
}

function App() {
    return <AuthorQuiz {...state} onAnswerSelected={onAnswerSelected}
                       onContinue={() => {
                            state = resetState();
                            render();
                       }
    }/>;
}

function AuthorWrapper(routeProps: RouteComponentProps) {
    return <AddAuthorForm onAddAuthor={author => {
        authors.push(author);
        routeProps.history.push('/');
    }} {...routeProps} />;
}

function render() {
    ReactDOM.render(
        <BrowserRouter>
            <React.Fragment>
                <Route exact path="/" component={App} />
                <Route path="/add" component={AuthorWrapper} />
            </React.Fragment>
        </BrowserRouter>
        , document.getElementById('root')
    );
}

render();
serviceWorker.unregister();
