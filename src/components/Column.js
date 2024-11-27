import React from 'react';
import Card from './Card';
import { AddIcon, ThreeDotsIcon } from '../icons';
import { getColumnIcon } from '../utils/iconUtils';
import '../styles/Column.css';

function Column({ title, tickets, grouping, users }) {
  return (
    <div className="column">
      <div className="column-header">
        <div className="header-left">
          {getColumnIcon(title, grouping)}
          <span className="column-title">{title}</span>
          <span className="ticket-count">{tickets.length}</span>
        </div>
        <div className="header-actions">
          <button className="action-button">
            <AddIcon />
          </button>
          <button className="action-button">
            <ThreeDotsIcon />
          </button>
        </div>
      </div>
      <div className="tickets-container">
        {tickets.length > 0 ? (
          tickets.map(ticket => (
            <Card
              key={ticket.id}
              ticket={ticket}
              user={users.find(u => u.id === ticket.userId)}
              grouping={grouping}
            />
          ))
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default Column;

