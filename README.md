# note-app
A simple note taking application built with react. It allows user to add, view and store notes locally in the browser using `localstorage` . The app is fully responsive and styled using plain CSS, providing a minimalist and clean UI.

## Features
- **Add Notes** : User can add notes by using this feature. Users can create a  new notes by providing title and a content.
- **View Notes** : Notes are stored in `localStorage` and persist across sessions.
- **Minimalist Design**: Clean, simple, and responsive user interface.
- **Persistent Storage**: The notes persist even after the page is refreshed, thanks to `localStorage`.

  ## Technologies used
  - React
  - localStorage
  - css

    ## Installation
    ### 1. Clone The Repository:
    ```bash
    git clone https://github.com/Pragyagit-07/note-app.git
     cd note-app
    ```
   ### 2. Install Dependencies:
  ```bash
    npm install
  ```
   ### 3. Run the server
  ```bash
    npm run dev
  ```

  # Folder Structure
  note-app/
│
├── public/
│   └── index.html        # Main HTML file
│
├── src/
│   ├── components/
│   │   ├── AddNote.jsx   
│   │   └── NotesList.jsx 
│   ├── App.css          
│   ├── App.jsx           
│   ├── index.css         
│   ├── index.js         
│   └── utils/
│       └── storage.js    
│
├── .gitignore
├── package.json
└── README.md           


