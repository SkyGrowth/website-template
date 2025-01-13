import React from "react";
import Button from "../main/Button";

const Header = ({ title, subheading, buttonText }) => {
  return (
    <header className="mb-6 mx-4">
      <h1 className="text-slate-950 text-5xl font-bold tracking-tighter pb-3">
        {title}
      </h1>
      <p className="text-slate-600 font-normal pb-6">{subheading}</p>

      <Button text={buttonText} />
    </header>
  );
};

export default Header;
