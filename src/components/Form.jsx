"use client";

import { useEffect, useState } from "react";
import AddMessageForm from "./AddMessageForm";
import Messages from "./Messages";

const Form = ({ testData }) => {
  const dataFromLocal = localStorage.getItem("comments");
  const initData = dataFromLocal ? JSON.parse(dataFromLocal) : testData;
  const [dataState, setDataState] = useState(initData);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(dataState));
  }, [dataState]);

  return (
    <>
      <Messages dataState={dataState} setDataState={setDataState} />
      <AddMessageForm setDataState={setDataState} />
    </>
  );
};

export default Form;
