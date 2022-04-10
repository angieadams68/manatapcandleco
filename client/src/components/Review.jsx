import React from "react";

const Review = (props) => {
  return (
    <div className="reviewsPage">
      <div id="reviewDiv">
        {props.reviews.map((review) => (
          <div className="reviews" key={review._id}>
            <h3 className="reviewName">{review.name}</h3>
            <p className="reviewP">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
