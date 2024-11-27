import React, { useMemo } from 'react';
import Column from './Column';
import { groupTickets, orderTickets } from '../utils/ticketUtils';
import '../styles/KanbanBoard.css';

function KanbanBoard({ tickets, users, grouping, ordering }) {
  const groupedAndOrderedTickets = useMemo(() => {
    const grouped = groupTickets(tickets, users, grouping);
    return orderTickets(grouped, ordering);
  }, [tickets, users, grouping, ordering]);

  const columns = useMemo(() => {
    if (grouping === 'status') {
      return ['Backlog', 'Todo', 'In progress', 'Done', 'Canceled'];
    } else if (grouping === 'user') {
      return [...new Set(users.map(user => user.name))];
    } else if (grouping === 'priority') {
      return ['Urgent', 'High', 'Medium', 'Low', 'No priority'];
    }
    return Object.keys(groupedAndOrderedTickets);
  }, [grouping, users, groupedAndOrderedTickets]);

  return (
    <div className="kanban-board">
      {columns.map(columnTitle => (
        <Column
          key={columnTitle}
          title={columnTitle}
          tickets={groupedAndOrderedTickets[columnTitle] || []}
          grouping={grouping}
          users={users}
        />
      ))}
    </div>
  );
}

export default KanbanBoard;

