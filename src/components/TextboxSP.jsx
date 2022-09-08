import React, { useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function TextboxSP() {
  const inputRef = useRef(null);
  const editorRef = useRef(null);
  const log = (event) => {
    inputRef.current.value = 'New value';
    event.preventDefault();
    if (editorRef.current) {


      console.log(editorRef.current.getContent());
    }
  };
  const [content, setContent] = useState("");

  const handleChange = (content) => {
    setContent(content)
  }


  const addImage = (event) => {
    setContent(content + "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Prince_Charles_Ireland-4.jpg/330px-Prince_Charles_Ireland-4.jpg'/>");
  }

  const handleSubmit = (event) => {
    alert("Text was submitted: " + content);
  }


  return (

    <form onSubmit={handleSubmit}>
      <h2>نظر شما</h2>
      <input
        ref={inputRef}
        type="text"
        id="message"
        name="message"
      />
      <Editor
        apiKey='your-api-key'
        onInit={(evt, editor) => editorRef.current = editor}
        init={{
          height: 500,
          menubar: false,
          images_upload_credentials: true,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'image | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help | ',
        }}
        value={content}
        onEditorChange={handleChange}

      />
      <button type="button" onClick={addImage}>add image</button>
      <br />
      <button onClick={log}>Log editor content</button>

    </form>

  );

}


