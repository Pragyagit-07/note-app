
import React, { useState } from 'react';
import { saveNotes, loadNotes } from '../utils/storage';

const AddNote = ({ onNoteAdded }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaving(true);
    setError('');

    const newNote = { title, content };
    const existing = loadNotes();
    const updated = [...existing, newNote];

    try {
      saveNotes(updated); 
      onNoteAdded();
      setTitle('');
      setContent('');
    } catch (e) {
      setError(e.message); 
    } finally {
      setSaving(false); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="error">{error}</div>}
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        required
      />
      <button type="submit" disabled={saving}>
        {saving ? 'Saving…' : 'Add Note'}
      </button>
    </form>
  );
};

export default AddNote;
