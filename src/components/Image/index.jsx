import React from "React";

const Image = ({ path = "", alt = "" }) => {
  return (
    <>
      <img src={new URL(path, import.meta.url)} alt={alt} />
    </>
  );
};
export default Image;
