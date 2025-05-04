
import React from 'react';
import './StatusFilter.css';

const StatusFilter = ({ selectedStatus, onStatusChange }) => {
  return (
    <div className="status-filter">
      <label htmlFor="statusFilter">Filter: </label>
      <select
        id="statusFilter"
        value={selectedStatus}
        onChange={(e) => onStatusChange(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  );
};

export default StatusFilter;
