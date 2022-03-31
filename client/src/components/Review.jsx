
import { useNavigate } from "react-router-dom";
import { useState } from "react"


const Review = (props) => {
  let navigate = useNavigate();
 const [review, setReview] = useState ({})
  const submitData = (e) => {
    e.preventDefault();
    props.addReview(e);
    navigate("/reviews");
  };
////// notes 
/// write handle change, take out the props, setting review state 
//// find example on how to set an object with state using different keys 

  return (
    <div id="reviewDiv">
      <div className="leaveAReview">Leave a Review</div>
      <form className="form" onSubmit={submitData}>
        <input
          className="formName formInput"
          type="text"
          value={review.name}
          onChange={props.handleChange}
          name={"name"}
          placeholder={"your name"}
        />
        <input
          className="formReview formInput"
          type="text-area"
          value={review.review}
          onChange={props.handleChange}
          name={"review"}
          placeholder={"your review"}
        />
        <button className="formButton">Submit</button>
      </form>
    </div>
  );
};

export default Review;
