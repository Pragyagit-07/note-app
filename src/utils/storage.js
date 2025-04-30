

const STORAGE_KEY = 'notes-app';

export const saveNotes = (notes) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  } catch (e) {
    throw new Error('Failed to save notes to storage');
  }
};

export const loadNotes = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    throw new Error('Failed to load notes from storage');
  }
};
