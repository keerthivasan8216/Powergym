import React, { useState, useEffect } from 'react';
import './AdminReviewPage.css';

// Sample data for reviews (In real scenarios, this would be fetched from a backend)
const sampleReviews = [
  {
    review_id: 1,
    customer_name: 'Ken',
    description: 'Great product, helped me recover quickly after workouts!',
    date: '2025-05-12',
  },
  {
    review_id: 2,
    customer_name: 'Priya',
    description: 'This mat provides great grip and comfort for my yoga sessions.',
    date: '2025-05-13',
  },
  {
    review_id: 3,
    customer_name: 'Raja',
    description: 'Love these dumbbells! Very easy to adjust the weight.',
    date: '2025-05-14',
  },
];

const AdminReviewPage = () => {
  const [reviews, setReviews] = useState([]);

  // Fetch reviews (simulate API call)
  useEffect(() => {
    setReviews(sampleReviews);
  }, []);

  return (
    <div className="admin-review-page">
      <h2>Customer Reviews</h2>

      <div className="reviews-container">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review.review_id} className="review-card">
              <div className="review-header">
                <h3>{review.customer_name}</h3>
                <span className="review-date">{review.date}</span>
              </div>
              <div className="review-body">
                <p><strong>Review:</strong> {review.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No reviews available.</p>
        )}
      </div>
    </div>
  );
};

export default AdminReviewPage;
