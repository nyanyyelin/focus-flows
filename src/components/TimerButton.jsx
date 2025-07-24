const TimerButton = ({ children }) => {
  return (
    <button className="m-2 w-full rounded-xl bg-gray-300 px-3 py-2 text-sm font-semibold text-black transition-all duration-300 hover:bg-white">
      {children}
    </button>
  );
};

export default TimerButton;
