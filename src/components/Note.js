import "./Note.css";

const Note = () => {
  return (
    <div className="card">
      <div className="card__header">Note Header</div>
      <div className="card__content">
        loagneioagneoa gngepgaehnesss ssssssssssgnegp
      </div>
      <div className="card__buttons">
        <button
          className="card__button card__button--delete"
          onClick={() => {
            console.log("Delete");
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Note;
