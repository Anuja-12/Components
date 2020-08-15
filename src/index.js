import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App= ()=>{
return (
    <div className="ui container elements">
        <ApprovalCard >
       <CommentDetail author="Anuja" timeAgo="Today at 4:05 pm" myView="Awesom!" myPic={faker.image.avatar()}/>
       </ApprovalCard>
       <ApprovalCard>
       <CommentDetail author="Anya" timeAgo="Today at 4:50 pm" myView="Nice one!" myPic={faker.image.avatar()}/>
       </ApprovalCard>
       
    
    </div>
);

};
ReactDOM.render(<App/>, document.querySelector('#root'))