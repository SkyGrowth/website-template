import React from "react";
import Button from "../main/Button";

const IconCard = ({
  title,
  description,
  buttonText,
  backgroundStyle,
  icon,
  border,
  titleStyle,
  subheadingStyle,
}) => {
  return (
    <div
      className={`${backgroundStyle} shadow-md border ${border} rounded-lg max-w-sm`}
    >
      <div className="p-5">
        <div className="mb-1">{icon}</div>
        <h5
          className={`${titleStyle.color} ${titleStyle.fontWeight} text-2xl tracking-tight mb-2`}
        >
          {title}
        </h5>
        <p
          className={`${subheadingStyle.color} ${subheadingStyle.fontWeight} mb-3`}
        >
          {description}
        </p>
        <Button text={buttonText} />
      </div>
    </div>
  );
};

export default IconCard;
