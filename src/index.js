import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="Avatar" />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Samantha
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 6:00PM</span>
                    </div>
                    <div className="text">Awesome blog post!</div>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));