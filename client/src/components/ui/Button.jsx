function Button({
  text,
  onClick,
  type = "button",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 p-3 rounded-lg font-semibold"
    >
      {text}
    </button>
  );
}

export default Button;