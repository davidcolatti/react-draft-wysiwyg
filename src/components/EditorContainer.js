import React, { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";

const EditorContainer = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [, setJsonText] = useState(null);

  function onEditorStateChange(editorState) {
    let convertedData = convertToRaw(editorState.getCurrentContent());
    console.log(convertedData);
    setJsonText(convertedData);

    setEditorState(editorState);
  }

  return (
    <div className="editor">
      <Editor
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbar={{
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
        }}
      />
    </div>
  );
};

export default EditorContainer;
