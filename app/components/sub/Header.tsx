import React from "react";
import Button from "../main/Button";

const Header = ({
  title,
  subheading,
  buttonText,
  titleStyle = {},
  subheadingStyle = {},
}) => {
  return (
    <header className="mb-6 mx-4">
      <h1
        className={`text-5xl tracking-tighter pb-3 ${titleStyle.color} ${titleStyle.fontWeight}`}
      >
        {title}
      </h1>
      <p
        className={`pb-6 max-w-96 ${subheadingStyle.color} ${subheadingStyle.fontWeight}`}
      >
        {subheading}
      </p>
      <Button text={buttonText} />
    </header>
  );
};

export default Header;
