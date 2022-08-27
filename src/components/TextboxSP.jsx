import React ,{ useEffect, useRef, useState } from "react";
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
  const [content,setContent]=useState("");
  const handleChange=(content)=>{

    
    setContent(content)
  

  }
  const handelclickaks=(event)=>{
    event.preventDefault();
    setContent({content:content+ "<img src='https://media-exp1.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0'/>"});
    
    
  }
  const handleSubmit=(event)=> {
    alert("Text was submitted: " +content);
    event.preventDefault();
  }
  useEffect(()=>{
   
    
  })
 
    return (
      
      <form onSubmit={handleSubmit}>
        <h2>نظرشما</h2>
        <input
        ref={inputRef}
        type="text"
        id="message"
        name="message"
      />
        <Editor
    
    onInit={(evt, editor) => editorRef.current = editor}
    ref={inputRef}
    init={{
      height: 500,
      menubar: false,
      images_upload_credentials: true
    }}
    onEditorChange={handleChange}
   />
   
   <br />
   <button onClick={log}>Log editor content</button>
        
      </form>
     
    );
   
  }


