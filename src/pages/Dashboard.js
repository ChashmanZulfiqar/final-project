import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig"; // Import Firebase config
import { collection, addDoc, updateDoc, deleteDoc, doc, getDocs } from "firebase/firestore"; // Firebase Firestore functions

const NotesForm = () => {
  const [note, setNote] = useState({
    title: "",
    content: "",
    subject: "",
    createdBy: "",
    collaborators: [],
  });
  const [notes, setNotes] = useState([]); // State for fetched notes
  const [statusMessage, setStatusMessage] = useState("");
  const [isEditing, setIsEditing] = useState(false); // Flag to check if editing
  const [editNoteId, setEditNoteId] = useState(null); // ID of the note being edited

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  };

  const handleAddCollaborator = () => {
    setNote((prevNote) => ({
      ...prevNote,
      collaborators: [...prevNote.collaborators, ""],
    }));
  };

  const handleCollaboratorChange = (index, value) => {
    const updatedCollaborators = [...note.collaborators];
    updatedCollaborators[index] = value;
    setNote((prevNote) => ({
      ...prevNote,
      collaborators: updatedCollaborators,
    }));
  };

  // Fetch Notes from Firebase Firestore
  const fetchNotes = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "notes"));
      const fetchedNotes = [];
      querySnapshot.forEach((doc) => {
        fetchedNotes.push({ ...doc.data(), id: doc.id });
      });
      setNotes(fetchedNotes);
    } catch (error) {
      console.error("Error fetching notes:", error.message);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const collaborators = note.collaborators.filter(
      (collaborator) => collaborator.trim() !== ""
    );

    const newNote = {
      ...note,
      collaborators,
      lastEditedAt: new Date(),
    };

    try {
      setStatusMessage(isEditing ? "Updating note..." : "Submitting...");
      if (isEditing) {
        // Update note in Firebase Firestore
        const noteRef = doc(db, "notes", editNoteId);
        await updateDoc(noteRef, newNote);
        setIsEditing(false);
        setEditNoteId(null);
      } else {
        // Create new note in Firebase Firestore
        await addDoc(collection(db, "notes"), {
          ...newNote,
          createdAt: new Date(),
        });
      }

      // Clear the form and refresh notes
      setNote({
        title: "",
        content: "",
        subject: "",
        createdBy: "",
        collaborators: [],
      });
      setStatusMessage(isEditing ? "Note updated successfully!" : "Note created successfully!");
      fetchNotes(); // Refresh notes after submission or update
    } catch (error) {
      console.error("Error submitting note:", error.message);
      setStatusMessage("Error submitting note. Please try again.");
    }
  };

  const handleEdit = (note) => {
    setNote({
      title: note.title,
      content: note.content,
      subject: note.subject,
      createdBy: note.createdBy,
      collaborators: note.collaborators,
    });
    setIsEditing(true);
    setEditNoteId(note.id); // Store the ID of the note being edited
  };

  const handleDelete = async (id) => {
    try {
      const noteRef = doc(db, "notes", id);
      await deleteDoc(noteRef);
      fetchNotes(); // Refresh notes after deletion
    } catch (error) {
      console.error("Error deleting note:", error.message);
    }
  };

  return (
    <div className="p-8 max-w-3xl mx-auto bg-gradient-to-r from-[#0030B3] to-[#99CA3C] shadow-lg rounded-lg mt-12"> {/* Added margin-top here */}
      <h1 className="text-3xl font-bold text-white mb-6 text-center">{isEditing ? "Edit Note" : "Create a New Note"}</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="mb-6">
          <label className="block text-lg font-semibold text-white mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={note.title}
            onChange={handleChange}
            className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#99CA3C]"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg font-semibold text-white mb-2">Content</label>
          <textarea
            name="content"
            value={note.content}
            onChange={handleChange}
            className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#99CA3C]"
            rows="4"
            required
          ></textarea>
        </div>
        <div className="mb-6">
          <label className="block text-lg font-semibold text-white mb-2">Subject</label>
          <input
            type="text"
            name="subject"
            value={note.subject}
            onChange={handleChange}
            className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#99CA3C]"
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg font-semibold text-white mb-2">Created By</label>
          <input
            type="text"
            name="createdBy"
            value={note.createdBy}
            onChange={handleChange}
            className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#99CA3C]"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg font-semibold text-white mb-2">Collaborators</label>
          {note.collaborators.map((collaborator, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="text"
                value={collaborator}
                onChange={(e) => handleCollaboratorChange(index, e.target.value)}
                className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#99CA3C]"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddCollaborator}
            className="bg-gray-200 text-[#0030B3] px-4 py-2 rounded-lg shadow-md hover:bg-[#99CA3C] transition duration-300"
          >
            Add Collaborator
          </button>
        </div>
        <button
          type="submit"
          className="bg-[#99CA3C] text-white px-6 py-3 rounded-lg shadow-md w-full hover:bg-[#0030B3] transition duration-300"
        >
          {isEditing ? "Update Note" : "Create Note"}
        </button>
      </form>

      {statusMessage && (
        <p className="mt-4 text-center text-white">{statusMessage}</p>
      )}

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-white mb-4">Notes</h2>
        {notes.length > 0 ? (
          notes.map((note) => (
            <div key={note.id} className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="font-semibold text-xl">{note.title}</h3>
              <p className="text-sm text-gray-500">{note.content}</p>
              <p className="text-sm text-gray-500">Subject: {note.subject}</p>
              <p className="text-sm text-gray-500">Created By: {note.createdBy}</p>
              <p className="text-sm text-gray-500">
                Collaborators: {note.collaborators.join(", ")}
              </p>
              <div className="mt-4">
                <button
                  onClick={() => handleEdit(note)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-md mr-4"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(note.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white">No notes available.</p>
        )}
      </div>
    </div>
  );
};

export default NotesForm;
