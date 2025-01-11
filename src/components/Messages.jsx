"use client";

import Message from "./Message";

const Messages = ({ dataState }) => {
  return (
    <div className="messages">
      {dataState?.map((data) => (
        <Message data={data} key={data.id} />
      ))}
    </div>
  );
};

export default Messages;
