import React, { useState, useEffect } from 'react';
import KanbanBoard from './components/KanbanBoard';
import Header from './components/Header';
import './App.css';

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState(() => {
    return localStorage.getItem('grouping') || 'status';
  });
  const [ordering, setOrdering] = useState(() => {
    return localStorage.getItem('ordering') || 'priority';
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
        const data = await response.json();
        setTickets(data.tickets);
        setUsers(data.users);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem('grouping', grouping);
    localStorage.setItem('ordering', ordering);
  }, [grouping, ordering]);

  const handleDisplayChange = (newGrouping, newOrdering) => {
    setGrouping(newGrouping);
    setOrdering(newOrdering);
  };

  return (
    <div className="app">
      <Header 
        grouping={grouping} 
        ordering={ordering} 
        onDisplayChange={handleDisplayChange}
      />
      <main className="main-content">
        <KanbanBoard 
          tickets={tickets}
          users={users}
          grouping={grouping}
          ordering={ordering}
        />
      </main>
    </div>
  );
}

export default App;

