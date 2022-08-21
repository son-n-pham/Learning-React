import './style/App.css';
// React handles react components
import React from 'react';
// ReactDom handles browser
import { createRoot } from 'react-dom/client';
import { faker } from '@faker-js/faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45PM"
          avatarImage={faker.image.avatar()}
          opinion="Good job"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 1:45PM"
          avatarImage={faker.image.avatar()}
          opinion="Fantastic"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Yesterday at 4:45PM"
          avatarImage={faker.image.avatar()}
          opinion="Well done"
        />
      </ApprovalCard>
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);
