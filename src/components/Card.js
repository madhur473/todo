import React from 'react';
import { getStatusIcon, getPriorityIcon } from '../utils/iconUtils';
import '../styles/Card.css';

function Card({ ticket, user, grouping }) {
  return (
    <div className="card">
      <div className="card-header">
        <span className="ticket-id">{ticket.id}</span>
        {grouping !== 'user' && user && (
          <div className="user-avatar">
            <span>{user.name[0]}</span>
            <div 
              className="availability-indicator"
              data-available={user.available}
            />
          </div>
        )}
      </div>
      <div className="card-title">
        {grouping !== 'status' && getStatusIcon(ticket.status)}
        <p>{ticket.title}</p>
      </div>
      <div className="card-footer">
        {grouping !== 'priority' && (
          <div className="priority-indicator">
            {getPriorityIcon(ticket.priority)}
          </div>
        )}
        {ticket.tag.map((tag, index) => (
          <div key={index} className="tag">
            <span className="tag-dot" />
            <span>{tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;

