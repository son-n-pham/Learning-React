import React from 'react'

function FeedbackStats({feedbacks}) {
	const avgRating = (feedbacks.reduce((acc, cur) => {
		return acc + cur.rating
	}, 0) / feedbacks.length).toFixed(1)
	return (
		<div className='feedback-stats'>
			<h4>{feedbacks.length} Reviews</h4>
			<h4>Average Rating: {isNaN(avgRating) ? 0 : avgRating}</h4>
		</div>
	)
}

export default FeedbackStats