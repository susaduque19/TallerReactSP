import React from "react";
import Image from "./Image";
import Info from "./Info";

const user = {
  email: 'susi@prueba.com',
};

export const App = () => {
  return (
    <>
      <Image />
      <Info data={user}/>
    </>
  );
};
