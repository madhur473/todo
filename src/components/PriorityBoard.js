import React, { useState, useEffect } from 'react';
import { 
  UrgentPriorityColorIcon,
  HighPriorityIcon,
  MediumPriorityIcon,
  LowPriorityIcon,
  NoPriorityIcon,
  AddIcon,
  ThreeDotsIcon
} from '../icons';
import '../styles/PriorityBoard.css';

const PRIORITY_GROUPS = {
  4: { icon: UrgentPriorityColorIcon, title: 'Urgent' },
  3: { icon: HighPriorityIcon, title: 'High' },
  2: { icon: MediumPriorityIcon, title: 'Medium' },
  1: { icon: LowPriorityIcon, title: 'Low' },
  0: { icon: NoPriorityIcon, title: 'No priority' },
};

export default function PriorityBoard({ tickets, users }) {
  const [groupedTickets, setGroupedTickets] = useState({});

  useEffect(() => {
    const groups = tickets.reduce((acc, ticket) => {
      const priority = ticket.priority;
      if (!acc[priority]) {
        acc[priority] = [];
      }
      acc[priority].push(ticket);
      return acc;
    }, {});

    setGroupedTickets(groups);
  }, [tickets]);

  return (
    <div className="priority-board">
      {Object.entries(PRIORITY_GROUPS).map(([priority, group]) => (
        <div key={priority} className="priority-column">
          <div className="column-header">
            <div className="header-left">
              <span className="priority-icon">
                {React.createElement(group.icon)} {/* Dynamically rendering icon */}
              </span>
              <span className="priority-title">{group.title}</span>
              <span className="ticket-count">
                {groupedTickets[Number(priority)]?.length || 0}
              </span>
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
            {groupedTickets[Number(priority)]?.map((ticket) => (
              <div key={ticket.id} className="ticket-card">
                <div className="ticket-header">
                  <span className="ticket-id">{ticket.id}</span>
                  <div className="user-avatar">
                    {users.find((u) => u.id === ticket.userId)?.name.charAt(0)}
                    <span
                      className="status-indicator"
                      data-available={
                        users.find((u) => u.id === ticket.userId)?.available
                      }
                    />
                  </div>
                </div>
                <h3 className="ticket-title">{ticket.title}</h3>
                <div className="ticket-tags">
                  <div className="feature-tag">
                    <span className="tag-icon">⭕</span>
                    <span>{ticket.tag[0]}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
