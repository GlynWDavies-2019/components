import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail 
                author="Nadia" 
                timeAgo="Today at 4:55PM" 
                content="Awesome post!" 
                avatar={faker.image.avatar()}
            />
            <CommentDetail 
                author="Sydney" 
                timeAgo="Yesterday at 2:00AM" 
                content="Totally agree!"
                avatar={faker.image.avatar()}
            />
            <CommentDetail 
                author="Dixon" 
                timeAgo="Today at 1:30AM" 
                content="No way!"
                avatar={faker.image.avatar()}
            />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));