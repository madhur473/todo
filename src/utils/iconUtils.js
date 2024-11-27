import {
    BacklogIcon,
    TodoIcon,
    InProgressIcon,
    DoneIcon,
    CancelledIcon,
    UrgentIcon,
    HighPriorityIcon,
    MediumPriorityIcon,
    LowPriorityIcon,
    NoPriorityIcon
  } from '../icons';
  
  export const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'backlog':
        return <BacklogIcon />;
      case 'todo':
        return <TodoIcon />;
      case 'in progress':
        return <InProgressIcon />;
      case 'done':
        return <DoneIcon />;
      case 'canceled':
        return <CancelledIcon />;
      default:
        return <BacklogIcon />;
    }
  };
  
  export const getPriorityIcon = (priority) => {
    switch (priority) {
      case 4:
        return <UrgentIcon />;
      case 3:
        return <HighPriorityIcon />;
      case 2:
        return <MediumPriorityIcon />;
      case 1:
        return <LowPriorityIcon />;
      case 0:
      default:
        return <NoPriorityIcon />;
    }
  };
  
  export const getColumnIcon = (title, grouping) => {
    if (grouping === 'status') {
      return getStatusIcon(title);
    }
    if (grouping === 'priority') {
      const priorityMap = {
        'Urgent': 4,
        'High': 3,
        'Medium': 2,
        'Low': 1,
        'No priority': 0
      };
      return getPriorityIcon(priorityMap[title]);
    }
    return null;
  };
  
  