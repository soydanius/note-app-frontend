import "./NoteList.css";
import Note from "./Note";
import AddNoteButton from "./AddNoteButton";
import { useState, useEffect } from "react";
import axios from "axios";

const NoteList = () => {
  const baseApiUrl = "http://localhost:8000";
  const [notesData, setNotesData] = useState([]);

  useEffect(() => {
    const getAllNotes = async () => {
      try {
        const allNotes = await axios.get(`${baseApiUrl}/notes`);
        setNotesData(allNotes.data);
      } catch (error) {
        console.error("Error fetching notes:", error.message);
      }
    };

    getAllNotes();
  }, [notesData]);

  const handleAddNote = async () => {
    try {
      const newNote = { header: "", content: "" };
      const response = await axios.post(`${baseApiUrl}/notes`, newNote);
      setNotesData([response.data, ...notesData]);
    } catch (error) {
      console.error("Error adding note:", error.message);
    }
  };

  const handleDeleteNote = async (noteId) => {
    try {
      if (noteId) {
        const response = await axios.delete(`${baseApiUrl}/notes/${noteId}`);
        if (response.status === 200) {
          const filteredNotes = notesData.filter((note) => note.id !== noteId);
          setNotesData([...filteredNotes]);
        }
      }
    } catch (error) {
      console.error("Error adding note:", error.message);
    }
  };

  return (
    <>
      <div className="notes-container">
        <div className="btn-container">
          <AddNoteButton handleAddNote={handleAddNote} />
        </div>
        {notesData.map((note) => {
          return (
            <Note
              key={note._id}
              id={note._id}
              initialHeader={note.header}
              initialContent={note.content}
              handleDeleteNote={handleDeleteNote}
            />
          );
        })}
      </div>
    </>
  );
};

export default NoteList;
