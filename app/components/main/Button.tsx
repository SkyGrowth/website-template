const Button = ({
  text,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
}) => {
  const buttonStyles = {
    primary: "bg-zinc-900 hover:bg-zinc-700 active:bg-zinc-950 text-white",
    secondary: "bg-gray-500 hover:bg-gray-700 active:bg-grey-950 text-white",
    danger: "bg-red-500 hover:bg-red-700 active:bg-red-950 text-white",
    outline:
      "border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
  };

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`px-4 py-2 rounded-md focus:outline-none transition duration-300 z-10 ease-in-out ${
        buttonStyles[variant]
      } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {text}
    </button>
  );
};

export default Button;
