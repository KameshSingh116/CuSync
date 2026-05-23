function Input({
  type,
  placeholder,
  value,
  onChange,
  name,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      className="w-full p-3 rounded-lg bg-slate-700 text-white outline-none border border-slate-600 focus:border-blue-500"
    />
  );
}

export default Input;