// function App() {
//   // We can only return 1 element. If we have more than 1, we need to wrap it into something such as div
//   return (
//     // <div>
//     //   <h1>Hello from the app component</h1>
//     //   <p>Hello</p>
//     // </div>

//     // We even do not need div
//     <>
//       <h1>Hello from the app component</h1>
//       <p>Hello</p>
//       {/* In React, we need to use className, not class */}
//       <div className="container"></div>
//     </>
//   );
// }

// // We can also use React to create element
// import React from 'react';

// function App() {
//   // Create h1 in div, this will be similar to callback hell, thus the above option with JSX is much better
//   return React.createElement(
//     'div',
//     { className: 'container' },
//     React.createElement('h1', {}, 'My App')
//   );
// }

//////////////////////////////////////////////////////////////
// // Use JSX from now on
// // Example of JSX with condition
// function App() {
//   const title = 'Blog Post';
//   const body = 'This is my blog post';
//   const comments = [
//     { id: 1, text: 'Comment one' },
//     { id: 2, text: 'Comment two' },
//     { id: 3, text: 'Comment three' },
//   ];

//   const loading = false;
//   const showComments = true;

//   const commentBlock = (
//     <div className="comments">
//       <h3>Comments ({comments.length})</h3>
//       <ul>
//         {comments.map((comment, index) => (
//           <li key={index}>{comment.text}</li>
//         ))}
//       </ul>
//     </div>
//   );

//   return (
//     <div className="container">
//       <h1>{title.toUpperCase()}</h1>
//       <p>{body}</p>
//       {5 + 5}
//       {Math.random() * 5 + 5}
//       {!loading && showComments && commentBlock}
//     </div>
//   );
// }

///////////////////////////////////////////////////////////
// Section 3: Createing first components
import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackData from './data/FeedbackData';
import FeedbackForm from './components/FeedbackForm';
// import Card from './components/shared/Card';

function App() {
  const [feedbacks, setFeedback] = useState(FeedbackData);
  const handleDelete = id => {
    setFeedback(feedbacks.filter(feedback => feedback.id !== id));
  };
  return (
    <>
      <Header />

      {/* We can pass value from App() to component, just need to parameters for Header function */}
      {/* <Header /> */}
      <div className="container">
        <FeedbackForm />
        <FeedbackStats feedbacks={feedbacks} />
        <FeedbackList
          feedbacks={feedbacks}
          // handleDelete={id =>
          //   setFeedback(feedbacks.filter(feedback => feedback.id !== id))
          // }

          handleDelete={id => handleDelete(id)}
        />

        {/* <Card>My card</Card> */}
      </div>
    </>
  );
}

export default App;
