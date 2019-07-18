import React, {Component} from 'react';
import './App.css';
import Hero from "./Hero";
import Turn from "./Turn";
import Continue from "./Continue";
import Footer from "./Footer";

interface AuthorQuizProps {
  turnData: {
    author: any,
    books: string[]
  }
}

export default class AuthorQuiz extends Component<AuthorQuizProps> {
  render() {
    return (
        <div className="container-fluid">
          <Hero />
          <Turn {...this.props.turnData} />
          <Continue />
          <Footer />
        </div>
    );
  }
}
