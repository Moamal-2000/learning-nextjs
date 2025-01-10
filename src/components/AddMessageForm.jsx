"use client";

import axios from "axios";
import { useState } from "react";

const AddMessageForm = ({ setDataState }) => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("");

    setIsLoading(true);
    const dataFromServer = await postMessage(message);
    setIsLoading(false);

    if (dataFromServer) {
      setIsError(false);
      setIsSuccess(true);
      hideMesage(setIsSuccess, false);
      setDataState((prevData) => {
        return [...prevData, dataFromServer];
      });
    } else {
      setIsError(true);
      setIsSuccess(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="add-msg-input"
        placeholder="Message"
      />
      {isLoading && "Loading..."}
      {!isLoading && isError && "Error :("}
      {isSuccess && "Sent successfully!"}
    </form>
  );
};

export default AddMessageForm;

async function postMessage(message) {
  const endPoint = "http://localhost:3000/api/test";
  const messages = await getMessages();
  const messageData = { message, id: messages?.length + 1 };
  const stringifiedData = JSON.stringify(messageData);

  try {
    const response = await axios.post(endPoint, stringifiedData);
    const data = response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
}

async function getMessages() {
  const endPoint = "http://localhost:3000/api/test";

  try {
    const response = await axios(endPoint);
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
}

function hideMesage(setState, state) {
  setTimeout(() => {
    setState(state);
  }, 2000);
}
