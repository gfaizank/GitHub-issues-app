import React, { useState } from 'react';

function Modal({ issues, isOpen, onClose }) {
  const [sortBy, setSortBy] = useState('asc'); // Initialize sort order to ascending

  // Function to toggle the sort order
  const toggleSortOrder = () => {
    setSortBy(sortBy === 'asc' ? 'desc' : 'asc');
  };

  // Sort the issues array based on creation date
  const sortedIssues = [...issues].sort((a, b) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);

    if (sortBy === 'asc') {
      return dateA - dateB; // Ascending order
    } else {
      return dateB - dateA; // Descending order
    }
  });

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        <h2>Sorted GitHub Issues:</h2>
        <button onClick={toggleSortOrder}>
          Sort by Creation Date ({sortBy === 'asc' ? 'Ascending' : 'Descending'})
        </button>
        <ul>
          {sortedIssues.map((issue) => (
            <li key={issue.id}>
              <strong>{issue.title}</strong> (#{issue.number})
              <p>{issue.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Modal;
