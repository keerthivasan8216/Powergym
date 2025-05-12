import React, { useState } from 'react';
import './Reviewpage.css';

const ReviewPage = () => {
  const [review, setReview] = useState({
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReview((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Review Submitted!');
    setReview({ description: '' });
  };

  return (
    <div className="review-page">
      <div className="review-heading">
        <h1>
          Customer <span>Review</span>
        </h1>
        <h2>We value your feedback</h2>
      </div>

      <div className="review-content">
        <form onSubmit={handleSubmit} className="review-form">
          <div className="form-group">
            <label htmlFor="description">Your Review</label>
            <textarea
              id="description"
              name="description"
              value={review.description}
              onChange={handleInputChange}
              placeholder="Write your review here..."
              rows="5"
            />
          </div>

          <button type="submit" className="submit-button">
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewPage;
