const CurrentTaskDetails = () => {
  return (
    <div>
      <div className="bg-windowbg border-bordergray w-[20rem] self-start justify-self-center rounded-lg border px-5 py-2 text-white shadow-sm">
        <h1 className="px-2 py-1 text-center text-lg font-bold">
          Current Task : Coding
        </h1>
        <ul className="list-disc px-2 py-1">
          <li>Status: Focus</li>
          <li>Started At: 10:15 AM PST</li>
          <li>Duration: 45 minutes </li>
        </ul>
      </div>
    </div>
  );
};

export default CurrentTaskDetails;
