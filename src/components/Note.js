import "./Note.css";
import { useState, useRef, useEffect } from "react";

const Note = ({ initialHeader, initialContent }) => {
  const [header, setHeader] = useState(initialHeader);
  const [content, setContent] = useState(initialContent);
  const [isEditingHeader, setIsEditingHeader] = useState(false);
  const [isEditingContent, setIsEditingContent] = useState(false);
  const headerInputRef = useRef(null);
  const contentTextareaRef = useRef(null);

  useEffect(() => {
    if (isEditingHeader) {
      headerInputRef.current.focus();
    }
    if (isEditingContent) {
      contentTextareaRef.current.focus();
    }
  }, [isEditingHeader, isEditingContent]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setIsEditingHeader(false);
    }
  };

  return (
    <div className="card">
      {isEditingHeader ? (
        <input
          className="card__header card__header--edit"
          ref={headerInputRef}
          type="text"
          value={header}
          spellCheck={false}
          onChange={(e) => setHeader(e.target.value)}
          onBlur={() => setIsEditingHeader(false)}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <h2 className="card__header" onClick={() => setIsEditingHeader(true)}>
          {header}
        </h2>
      )}

      {isEditingContent ? (
        <textarea
          className="card__content card__content--edit"
          maxLength={400}
          ref={contentTextareaRef}
          value={content}
          spellCheck={false}
          onChange={(e) => setContent(e.target.value)}
          onBlur={() => setIsEditingContent(false)}
        />
      ) : (
        <p
          className="card__content"
          onClick={() => setIsEditingContent(true)}
          dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, "<br />") }}
        />
      )}

      <button
        className="card__button card__button--delete"
        onClick={() => {
          console.log("Delete");
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Note;
