import React, { useState } from 'react';

function IssuesList({ issues, sortable = false }) {
  const [sortBy, setSortBy] = useState('asc'); // Initialize sort order to ascending

  // Function to toggle the sort order
  const toggleSortOrder = () => {
    setSortBy((prevSortBy) => (prevSortBy === 'asc' ? 'desc' : 'asc'));
  };

  let displayedIssues = issues;

  // If sortable is true, sort the issues array based on creation date
  if (sortable) {
    displayedIssues = [...issues].sort((a, b) => {
      const dateA = new Date(a.created_at);
      const dateB = new Date(b.created_at);

      if (sortBy === 'asc') {
        return dateA - dateB; // Ascending order
      } else {
        return dateB - dateA; // Descending order
      }
    });
  }

  return (
    <div>
      <h2>GitHub Issues:</h2>
      {sortable && (
        <button onClick={toggleSortOrder}>
          Sort by Creation Date ({sortBy === 'asc' ? 'Ascending' : 'Descending'})
        </button>
      )}
      <ul>
        {displayedIssues.map((issue) => (
          <li key={issue.id}>
            <strong>{issue.title}</strong> (#{issue.number})
            <p>{issue.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IssuesList;
