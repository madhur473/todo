import { useState } from 'react';
import { DisplayIcon, DownIcon } from '../icons';
import '../styles/DisplayButton.css';

function DisplayButton({ grouping, ordering, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleGroupingChange = (e) => {
    onChange(e.target.value, ordering);
  };

  const handleOrderingChange = (e) => {
    onChange(grouping, e.target.value);
  };

  return (
    <div className="display-button-container">
      <button 
        className="display-button" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <DisplayIcon />
        <span>Display</span>
        <DownIcon />
      </button>

      {isOpen && (
        <div className="display-dropdown">
          <div className="dropdown-row">
            <span>Grouping</span>
            <select value={grouping} onChange={handleGroupingChange}>
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="dropdown-row">
            <span>Ordering</span>
            <select value={ordering} onChange={handleOrderingChange}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}

export default DisplayButton;

