import React, {Component, SyntheticEvent} from 'react';
import {RouteComponentProps} from "react-router";
import './AddAuthorForm.css'


interface AddAuthorFormProps extends RouteComponentProps {
    onAddAuthor: (state: AddAuthorFormState) => void;
}

interface AddAuthorFormState {
    name: string;
    imageUrl: string;
    books: string[];
    bookTemp: string;
}

export default class AddAuthorForm extends Component<AddAuthorFormProps, AddAuthorFormState> {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            imageUrl: '',
            books: [],
            bookTemp: ''
        };

        this.onFieldChange = this.onFieldChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddBook = this.handleAddBook.bind(this);
    }

    onFieldChange(event) {
        this.setState({
           [event.target.name]: event.target.value
        } as Pick<AddAuthorFormState, keyof AddAuthorFormState>);
    }

    handleSubmit(event: SyntheticEvent) {
        event.preventDefault();

        this.props.onAddAuthor(this.state);
    }

    handleAddBook(event: SyntheticEvent) {
        this.setState({
            books: this.state.books.concat([this.state.bookTemp]),
            bookTemp: ''
        });
    }

    render() {
        return (
            <div className="AddAuthorForm">
                <h1>Add Author</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="AddAuthorForm__input">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" value={this.state.name} onChange={this.onFieldChange}/>
                    </div>

                    <div className="AddAuthorForm__input">
                        <label htmlFor="imageUrl">Image URL</label>
                        <input type="text" name="imageUrl" value={this.state.imageUrl} onChange={this.onFieldChange}/>
                    </div>

                    <div className="AddAuthorForm__input">
                        <label htmlFor="bookTemp"> Books </label>

                        { this.state.books.map(book => <p key={book} >{book}</p>) }

                        <input type="text" name="bookTemp" value={this.state.bookTemp} onChange={this.onFieldChange}/>
                        <input type="button" value="+" onClick={this.handleAddBook}/>
                    </div>

                    <input type="submit" value="add" />
                </form>
            </div>
        );
    }
}
