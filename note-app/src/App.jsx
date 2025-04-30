import React, { useState } from 'react';
import AddNote from './components/AddNote';
import NotesList from './components/NotesList';
import './App.css';

function App() {
  const [view, setView] = useState('add'); // 'add' or 'list'
  const [refresh, setRefresh] = useState(false);

  const handleNoteAdded = () => {
    setRefresh(!refresh); // force re-render NotesList
    setView('list');
  };

  return (
    <div className="app">
      <nav>
        <button onClick={() => setView('add')}>Add Note</button>
        <button onClick={() => setView('list')}>View Notes</button>
        {/* Why this nav approach: it's simple, avoids react-router, and meets the requirements */}
      </nav>

      {view === 'add' && <AddNote onNoteAdded={handleNoteAdded} />}
      {view === 'list' && <NotesList key={refresh} />}
    </div>
  );
}

export default App;
