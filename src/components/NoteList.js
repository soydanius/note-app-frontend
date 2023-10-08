import Note from "./Note";

const NoteList = () => {
  const notesData = [
    {
      header: "Have to go shopping",
      content: "Mild, cheese, oats, water etc.",
    },
    {
      header: "5",
      content: "6",
    },
    {
      header: "Have to go shopping",
      content: "Mild, cheese, oats, water etc.",
    },
    {
      header: "5",
      content: "6",
    },
    {
      header: "Have to go shopping",
      content: "Mild, cheese, oats, water etc.",
    },
    {
      header: "5",
      content: "6",
    },
  ];

  return notesData.map((note, index) => {
    return (
      <Note
        key={index}
        initialHeader={note.header}
        initialContent={note.content}
      />
    );
  });
};

export default NoteList;
