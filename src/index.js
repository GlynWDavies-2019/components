import React from 'react';
import ReactDOM from 'react-dom';

import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Nadia" />
            <CommentDetail author="Sydney" />
            <CommentDetail author="Dixon" />
            <CommentDetail author="Marshall" />
            <CommentDetail author="Weiss" />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));