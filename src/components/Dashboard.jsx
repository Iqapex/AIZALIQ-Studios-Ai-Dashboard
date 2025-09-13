// src/components/Dashboard.js
import React from 'react';
import './styles.css';

function Dashboard() {
  return (
    <main className="dashboard">
      <h2>Interview Groups</h2>

      <div className="group">
        <h3>Interview</h3>
        <div className="group-items">
          <div className="group-item">Domain Specific Interview</div>
          <div className="group-item">Competency Based Interview</div>
          <div className="group-item">HR Interview</div>
        </div>
      </div>

      <div className="group">
        <h3>Popular AI Solutions</h3>
        <div className="group-items">
          <div className="group-item">Ask Anything</div>
          <div className="group-item">Generate Images</div>
          <div className="group-item">Generate Videos</div>
          <div className="group-item">Life Coach</div>
          <div className="group-item">Medical Guide</div>
          <div className="group-item">Psychologist</div>
          <div className="group-item">Office Assistant</div>
          <div className="group-item">Language Expert</div>
          <div className="group-item">Science Tutor</div>
          <div className="group-item">Career Counselor</div>
          <div className="group-item">IQ Assessor</div>
          <div className="group-item">Social Media Expert</div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
