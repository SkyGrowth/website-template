import React from "react";
import Button from "../main/Button";

const TextSection = ({
  title,
  subheading,
  buttonText,
  titleStyle,
  subheadingStyle,
}) => {
  return (
    <div className="mb-6 mx-4">
      <h1
        className={`text-3xl tracking-tighter pb-3 ${titleStyle.color} ${titleStyle.fontWeight}`}
      >
        {title}
      </h1>
      <p
        className={`pb-6 ${subheadingStyle.color} ${subheadingStyle.fontWeight}`}
      >
        {subheading}
      </p>
      <Button text={buttonText} />
    </div>
  );
};

export default TextSection;
