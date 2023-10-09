import "./AddNoteButton.css";

const AddNoteButton = ({ handleAddNote }) => {
  return (
    <button className="btn" onClick={handleAddNote}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#212529"
        className="bi bi-plus"
        viewBox="0 0 16 16"
        width="25"
        height="25"
      >
        <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 0 1 0 2H9v6a1 1 0 0 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
      </svg>
    </button>
  );
};

export default AddNoteButton;
