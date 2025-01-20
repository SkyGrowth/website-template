import React from "react";
import Button from "../main/Button";

const SecondaryHeader = ({
  title,
  subheading,
  buttonText,
  titleStyle,
  subheadingStyle,
  backgroundStyle,
}) => {
  return (
    <div
      className={`${backgroundStyle} pb-10 relative flex flex-col items-center justify-center pt-8 -z-10`}
    >
      <h6
        className={`text-4xl tracking-tighter pb-3 ${titleStyle.color} ${titleStyle.fontWeight}`}
      >
        {title}
      </h6>
      <p
        className={`pb-6 max-w-96 text-center ${subheadingStyle.color} ${subheadingStyle.fontWeight}`}
      >
        {subheading}
      </p>
      <Button text={buttonText} />
    </div>
  );
};

export default SecondaryHeader;
