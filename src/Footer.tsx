import React, {Component} from 'react';

export default class Footer extends Component {
  render() {
    return (
        <div id="footer" className="row">
            <div className="col-12">
                <p className="text-muted credit">
                    All images are from <a href="https://www.google.com">Google</a>
                    and are in the public domain
                </p>
            </div>
        </div>
    );
  }
}
