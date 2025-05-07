
import React, { useState } from 'react';
import './reviewpage.css';

const ReviewPage = () => {
  const [review, setReview] = useState({
    image: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReview((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setReview((prev) => ({
      ...prev,
      image: URL.createObjectURL(e.target.files[0]),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Review Submitted!');
  };

  return (
    <div className="review-page">
      <h2>Submit Your Review</h2>
      <form onSubmit={handleSubmit} className="review-form">
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={review.description}
            onChange={handleInputChange}
            placeholder="Write your review here"
            rows="5"
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Upload an Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/"
            onChange={handleImageChange} />
        </div>
        {review.image && (
          <div className="image-preview">
            <img src={review.image} alt="Review Preview" />
          </div>
        )}

        <button type="submit" className="submit-button">
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewPage;
