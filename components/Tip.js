const Tip = ({ children }) => {
  return (
    <div className="my-2 p-2 bg-emerald-300 text-emerald-900 rounded flex gap-1">
      💡 <div>{children}</div>
    </div>
  );
};

export default Tip;
