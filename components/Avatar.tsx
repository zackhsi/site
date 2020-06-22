import React from "react";

type Props = {
  alt: string;
  src: string;
};

const Avatar = ({ src, alt }: Props) => (
  <img
    src={src}
    alt={alt}
    style={{ borderRadius: "50%", width: "150px", height: "150px" }}
  />
);

export default Avatar;
