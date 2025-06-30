import Note from "../models/Note.js";

export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    console.log("Error occurred while fetching notes: ", error);
    res.status(500).json({ message: "Internal Server Error in getting notes" });
  }
};

export const getNoteById = async (req, res) => {
  const { id } = req.params;
  try {
    const note = await Note.findById(id);

    if (!note)
      return res
        .status(404)
        .json({ message: "Note not found by the given credentials (id)" });

    res.status(200).json(note);
  } catch (error) {
    console.log("Error occurred while fetching a note: ", error);
    res
      .status(500)
      .json({ message: "Internal Server Error in getting a note" });
  }
};

export const createNote = async (req, res) => {
  try {
    const { title, description } = req.body;
    console.log(
      "This is title: " +
        title +
        ", And this is the description: " +
        description
    );

    if (!title || !description) {
      return res
        .status(400)
        .json({ message: "Title and Description are not provided" });
    }

    const newNote = new Note({ title, description });
    const savedNote = await newNote.save();

    res.status(201).json(savedNote);
  } catch (error) {
    console.log("Error occurred while creating note: ", error);
    res
      .status(500)
      .json({ message: "Internal Server Error occurred while creating note" });
  }
};

export const updateNote = async (req, res) => {
  try {
    const { title, description } = req.body;
    const id = req.params.id;
    const updatedData = await Note.findByIdAndUpdate(
      id,
      {
        title,
        description,
      },
      { new: true }
    );
    if (!updatedData)
      return res.status(404).json({ message: "Note not found" });

    res.status(200).json(updatedData);
  } catch (error) {
    console.log("Error occurred while updating values: ", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedNote = await Note.findByIdAndDelete(id);
    if (!deletedNote)
      return res.status(404).json({ message: "Note not found" });
    res.status(200).json("Note deleted successfully!");
  } catch (error) {
    console.log("Error occurred while deleting note", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
