import React from 'react';

function Metrics({ issues }) {
  // Calculate the required metrics here based on the 'issues' data
  const totalIssues = issues.length;
  const openIssues = issues.filter((issue) => issue.state === 'open').length;
  const closedIssues = totalIssues - openIssues;

  return (
    <div>
      <h2>GitHub Issue Metrics:</h2>
      <ul>
        <li>Total Issues: {totalIssues}</li>
        <li>Open Issues: {openIssues}</li>
        <li>Closed Issues: {closedIssues}</li>
        {/* Add more metrics calculations here */}
      </ul>
    </div>
  );
}

export default Metrics;
