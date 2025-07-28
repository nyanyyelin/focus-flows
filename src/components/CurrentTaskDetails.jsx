const CurrentTaskDetails = () => {
  return (
    <div>
      <div className="bg-windowbg border-bordergray w-[20rem] self-start justify-self-center rounded-lg border px-5 py-2 text-white shadow-sm">
        <h1 className="px-2 py-1 text-center text-lg font-bold">
          Current Task : Coding
        </h1>
        <ul className="list-disc px-2 py-1">
          <li className="mb-1">Session Type: Focus ( 1 of 4 ) </li>
          <li className="mb-1">Started At: 07/29/2025 at 10:15 AM</li>
          <li className="mb-1">Duration: 45 minutes </li>
          <li className="mb-1">Due Date: 07/31/2025 at 11:59 PM</li>
        </ul>
      </div>
    </div>
  );
};

export default CurrentTaskDetails;
