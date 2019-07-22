import React, {Component} from 'react';
import {RouteComponentProps} from "react-router";
import './AddAuthorForm.css'


interface AddAuthorFormProps extends RouteComponentProps {
}

export default class AddAuthorForm extends Component<AddAuthorFormProps, any> {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            imageUrl: ''
        };

        this.onFieldChange = this.onFieldChange.bind(this);
    }

    onFieldChange(event) {
        this.setState({
           [event.target.name]: event.target.value
        });
    }


  render() {
    return (
        <div className="AddAuthorForm">
            <h1>Add Author</h1>
            <form>
                <div className="AddAuthorForm__input">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.onFieldChange} />
                </div>

                <div className="AddAuthorForm__input">
                    <label htmlFor="imageUrl">Image URL</label>
                    <input type="text" name="imageUrl" value={this.state.imageUrl} onChange={this.onFieldChange} />
                </div>
            </form>
        </div>
    );
  }
}
