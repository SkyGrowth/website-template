import React from "react";

const Title = ({ title, titleStyle, backgroundStyle }) => {
  return (
    <div>
      <h1
        className={`${titleStyle.color} ${titleStyle.fontWeight} ${backgroundStyle} text-5xl tracking-tighter relative flex items-center justify-center pt-10`}
      >
        {title}
      </h1>
    </div>
  );
};

export default Title;
