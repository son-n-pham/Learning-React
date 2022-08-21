import React from 'react';
import PropTypes from 'prop-types'
import FeedbackItem from './FeedbackItem'

function FeedbackList({feedbacks, handleDelete}) {
	if(!feedbacks || feedbacks.length===0) {
		return <p>No Feedback Yet</p>
	}

	return (
		<div className='feedback-list'>
			{feedbacks.map(feedback => 
				<FeedbackItem 
					key={feedback.id} 
					feedbackData={feedback}
					handleDelete={handleDelete}	
				/>			
			)}
		</div>
	)
}

FeedbackList.propTypes = {
	feedbacks: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			rating: PropTypes.number.isRequired,
			text: PropTypes.string.isRequired
		})
	)
}

export default FeedbackList