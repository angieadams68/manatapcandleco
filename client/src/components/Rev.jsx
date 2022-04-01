import React from "react"
import { Link } from 'react-router-dom'

////////////////////// COMPONENT FUNCTION //////////////
const Review = (props) => {
  return (
    <div className='reviewsPage'>
        <Link to='/'><button className='gamesButton'>back</button></Link>
    <div id="reviewDiv">
      {props.reviews.map((review) => (
        <div className="reviews" key={review._id}>
          <h3 className="reviewName">{review.name}</h3>
          <p className="reviewP">{review.review}</p>
          <p>rating: {review.rating} /10</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Review;