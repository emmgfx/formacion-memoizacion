const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="py-2 px-4 transition bg-emerald-300 hover:bg-emerald-200 focus:bg-emerald-200 active:bg-emerald-400 text-emerald-900"
    >
      {children}
    </button>
  );
};

export default Button;
