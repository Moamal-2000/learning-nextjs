"use client";

const Messages = ({ dataState }) => {
  return dataState?.map(({ message, id }) => (
    <h3 key={id}>
      {id}: {message}
    </h3>
  ));
};

export default Messages;
