"use client"

import { useState } from "react";
import AddMessageForm from "./AddMessageForm";
import Messages from "./Messages";

const Form = ({ testData }) => {
  const [dataState, setDataState] = useState(testData)

  return (
    <>
      <Messages dataState={dataState} />
      <AddMessageForm setDataState={setDataState} />
    </>
  );
};

export default Form;
