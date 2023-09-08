import React, { useState, useEffect } from 'react';
import IssuesList from '../components/IssuesList';

function IssueContainer({ openModalWithIssues, setIssuesData }) {
  const [issues, setIssues] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Replace 'owner' and 'repo' with the actual GitHub owner and repository names
    const owner = 'KillianLucas';
    const repo = 'open-interpreter';

    fetch(`https://api.github.com/repos/${owner}/${repo}/issues?per_page=1000`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Update the issues state with the fetched data
        setIssues(data);

        // Call setIssuesData to pass the issues data to the parent component (App.js)
        setIssuesData(data);

        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching issues:', error);
        setIsLoading(false);
      });
  }, [setIssuesData]); // Include setIssuesData as a dependency

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {/* Display the IssuesList component */}
          <IssuesList issues={issues} sortable={true} openModalWithIssues={openModalWithIssues} />
        </div>
      )}
    </div>
  );
}

export default IssueContainer;
