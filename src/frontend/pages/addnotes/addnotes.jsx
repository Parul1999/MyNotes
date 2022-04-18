import React, { useState } from "react";
import './style.css'
import '../../commonstyles/Globalstyles.css'
export default function CreateNote({ addNote,setNote,note,tags,setNoteTag }) {
 
  const colors = ["wheat", "yellow", "lightgreen", "aqua"];
  const handlecolorclick = (color) => {
    setNote((obj) => ({ ...obj, bgcolor: color }));
  };
  const coloredStyle = {
    backgroundColor: `${note.bgcolor}`
  };

  return (
<div className="note-container"  >
      <form className="note-wrap" >
          <input className="add-note-inp"
            autoComplete="off"
            name="title"
            value={note.title}
            placeholder="Title"
            style={coloredStyle}
            onChange={(e)=>{setNote((obj)=>({...obj,title:e.target.value}))}}
          />
        
        <textarea
          name="content"
          value={note.content}
          placeholder="Add a note !!"
          className="add-note-inp"
          style={coloredStyle}
          onChange={(e)=>{setNote((obj)=>({...obj,content:e.target.value}))}}
        />
<div className="tag-btn-container">
          <select
            name="tag"
            value={note.tag}
            onChange={(e)=>{setNote((obj)=>({...obj,tag:e.target.value}))}}
          >
            {tags.map((tag) => (
              <option value={tag}>{tag}</option>
            ))}
          </select>
        

        <button type="button" className="add-note-btn  button button-mr" onClick={()=>{addNote(note)}}>
            Add Note
        </button>
        </div>
          <div className="colors-wrap">
            {colors.map((color) => (
              <button
                key={color}
                type="button"
                className="btn-round"
                style={{ backgroundColor: `${color}` }}
                onClick={() => handlecolorclick(color)}
              ></button>
            ))}
          </div>
      </form>
      </div>
  );
}


