import React, { useEffect, useState } from 'react';
import { loadNotes } from '../utils/storage';

const NotesList = () => {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState('');

  // Why useEffect to sync storage → state: ensures notes load only once on mount
  useEffect(() => {
    try {
      const loadedNotes = loadNotes();
      setNotes(loadedNotes);
    } catch (e) {
      setError('Failed to load notes');
    }
  }, []);

  if (error) return <div className="error">{error}</div>;

  return (
    <div>
      <h2>Saved Notes</h2>
      {notes.length === 0 ? (
        <p>No notes yet.</p>
      ) : (
        <ul>
          {notes.map((note, index) => (
            <li key={index} className="note-card">
              <h3>{note.title}</h3>
              <p>{note.content.slice(0, 50)}...</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NotesList;
