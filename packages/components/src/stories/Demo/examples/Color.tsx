import React from 'react';
import ButtonTS from "../../../ButtonTest";

const emptyFunction = () => {};

export const Color = () => {
  return (
      <ButtonTS label={"Je suis un autre test"} onClick={emptyFunction} color={"red"} />
  );
}
