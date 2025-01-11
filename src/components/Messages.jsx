"use client";

import Message from "./Message";

const Messages = ({ dataState, setDataState }) => {
  return (
    <div className="messages">
      {dataState?.map((data) => (
        <Message dataState={dataState} data={data} key={data.id} setDataState={setDataState} />
      ))}
    </div>
  );
};

export default Messages;
