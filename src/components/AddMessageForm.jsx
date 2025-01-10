"use client";

const AddMessageForm = () => {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return <form onSubmit={handleSubmit}></form>;
};

export default AddMessageForm;
