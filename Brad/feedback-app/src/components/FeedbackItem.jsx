// Import hook of state by useState
// It is placed
// import {useState} from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import Card from './shared/Card';
import {FaTimes} from 'react-icons/fa';

function FeedbackItem({feedbackData, handleDelete}) {
	// const [rating, setRating] = useState(7);
	// const [text, setText] = useState('This is an example of a feedback item');
	// const [feedback, setFeedback] =useState(feedbackData)

	// const handleClick = () => {
	// 	setRating((prev) => {
	// 		console.log(prev);
	// 		return prev+1;
	// 	});
	// } 


	return (
		// <div className='card'>
		// 	<div className="num-display">{feedbackData.rating}</div>
		// 	<div className="text-display">{feedbackData.text}</div>
		// 	{/* <button onClick={handleClick}>Click</button> */}
		// </div>
		<Card reverse={true}>
			<div className="num-display">{feedbackData.rating}</div>
			<button onClick={() => handleDelete(feedbackData.id) } className='close'>
				<FaTimes color='purple'/>
			</button>
			<div className="text-display">{feedbackData.text}</div>
		</Card>
	)

	FeedbackItem.propTypes = {
		feedbackData: PropTypes.object.isRequired,
	}
}

export default FeedbackItem