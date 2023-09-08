import React, { useState } from 'react';
import IssuesList from './components/IssuesList';
import Metrics from './components/Metrics';
import Modal from './components/Modals';
import IssueContainer from './containers/IssueContainer';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIssues, setModalIssues] = useState([]);
  const [issuesData, setIssuesData] = useState([]); // State to store issues data for Metrics component

  const openModalWithIssues = (issues) => {
    setModalIssues(issues);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1>GitHub Issues App</h1>

      <IssueContainer openModalWithIssues={openModalWithIssues} setIssuesData={setIssuesData} />

      {/* Pass issuesData to the Metrics component */}
      <Metrics issues={issuesData} />

      {isModalOpen && (
        <Modal issues={modalIssues} isOpen={isModalOpen} onClose={closeModal} />
      )}
    </div>
  );
}

export default App;
