import React, { useState } from 'react';
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';

const DraftEditor = () => {
  // Initialize editor state using useState
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  // Handle editor state changes
  const handleChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  return (
    <div>
      <h2>Draft.js Editor</h2>
      {/* Render the Draft.js Editor component */}
      <div style={{ border: '1px solid #ccc', padding: '10px' }}>
        <Editor editorState={editorState} onChange={handleChange} />
      </div>
    </div>
  );
};

export default DraftEditor;