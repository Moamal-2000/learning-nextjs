"use client";

import { useState } from "react";

const useToggle = (defaultState = false) => {
  const [value, setValue] = useState(defaultState);

  function toggle(val) {
    setValue((prevValue) => (val ? val : !prevValue));
  }

  [value, toggle];
};

export default useToggle;
