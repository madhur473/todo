import React, { useState } from 'react';
import { DisplayIcon, DownIcon } from '../icons';
import '../styles/Header.css';

function Header({ grouping, ordering, onDisplayChange }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="header">
      <div className="display-button-container">
        <button 
          className="display-button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <DisplayIcon />
          <span>Display</span>
          <DownIcon />
        </button>

        {isDropdownOpen && (
          <div className="display-dropdown">
            <div className="dropdown-row">
              <span>Grouping</span>
              <select 
                value={grouping}
                onChange={(e) => onDisplayChange(e.target.value, ordering)}
              >
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <div className="dropdown-row">
              <span>Ordering</span>
              <select
                value={ordering}
                onChange={(e) => onDisplayChange(grouping, e.target.value)}
              >
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;

