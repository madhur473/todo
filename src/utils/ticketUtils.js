export const groupTickets = (tickets, users, grouping) => {
    if (!tickets.length) return {};
  
    switch (grouping) {
      case 'status':
        return tickets.reduce((acc, ticket) => {
          const status = ticket.status;
          if (!acc[status]) acc[status] = [];
          acc[status].push(ticket);
          return acc;
        }, {});
  
      case 'user':
        return tickets.reduce((acc, ticket) => {
          const user = users.find(u => u.id === ticket.userId);
          const userName = user ? user.name : 'Unassigned';
          if (!acc[userName]) acc[userName] = [];
          acc[userName].push(ticket);
          return acc;
        }, {});
  
      case 'priority':
        const priorityMap = {
          4: 'Urgent',
          3: 'High',
          2: 'Medium',
          1: 'Low',
          0: 'No priority'
        };
        return tickets.reduce((acc, ticket) => {
          const priority = priorityMap[ticket.priority];
          if (!acc[priority]) acc[priority] = [];
          acc[priority].push(ticket);
          return acc;
        }, {});
  
      default:
        return { 'All Tickets': tickets };
    }
  };
  
  export const orderTickets = (groupedTickets, ordering) => {
    const orderedGroups = {};
  
    Object.keys(groupedTickets).forEach(key => {
      orderedGroups[key] = [...groupedTickets[key]].sort((a, b) => {
        if (ordering === 'priority') {
          return b.priority - a.priority;
        } else {
          return a.title.localeCompare(b.title);
        }
      });
    });
  
    return orderedGroups;
  };
  
  