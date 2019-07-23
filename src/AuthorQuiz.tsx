import React, {Component} from 'react';
import './App.css';
import Hero from "./Hero";
import Turn from "./Turn";
import Continue from "./Continue";
import Footer from "./Footer";
import {Link} from "react-router-dom";

interface AuthorQuizProps {
  turnData: {
    author: any;
    books: string[];
  };
  highlight: string;
  onAnswerSelected: (title) => void;
  onContinue: () => void;
}

export default class AuthorQuiz extends Component<AuthorQuizProps> {

    render() {
        let highlight = this.props.highlight;
        return (
        <div className="container-fluid">
          <Hero />
          <Turn {...this.props.turnData} highlight={highlight} onAnswerSelected={this.props.onAnswerSelected}/>
          <Continue show={highlight === 'correct'} onContinue={this.props.onContinue} />
            <p> <Link to="/add"> Add an author</Link> </p>
          <Footer />
        </div>
    );
  }
}
