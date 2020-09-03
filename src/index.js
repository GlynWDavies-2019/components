import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author="Nadia" 
                    timeAgo="Today at 4:55PM" 
                    content="Awesome post!" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Sydney" 
                    timeAgo="Yesterday at 2:00AM" 
                    content="Totally agree!"
                    avatar={faker.image.avatar()}
                /> 
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Dixon" 
                    timeAgo="Today at 1:30AM" 
                    content="No way!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));