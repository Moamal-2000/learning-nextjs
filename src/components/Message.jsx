"use client";

import { useEffect, useRef, useState } from "react";
import { updateCommentFromServer } from "../functions/api";

const Message = ({ data: { message, id } }) => {
  const inputRef = useRef();
  const [input, setInput] = useState("");
  const [showEditInput, setShowEditInput] = useState(false);

  function handleEditBtn() {
    setShowEditInput((prevBoolean) => !prevBoolean);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    updateCommentFromServer(id, input);
  }

  useEffect(() => {
    if (showEditInput) {
      inputRef?.current.focus();
      console.log(inputRef?.current);
    }
  }, [showEditInput]);

  return (
    <div className="message" key={id}>
      <h3>
        {id}: {message}
      </h3>

      <button type="button" onClick={handleEditBtn}>
        Edit
      </button>

      {showEditInput && (
        <form onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
      )}
    </div>
  );
};

export default Message;
