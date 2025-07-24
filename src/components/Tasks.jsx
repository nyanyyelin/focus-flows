import TaskItem from './TaskItem';
const Tasks = () => {
  return (
    <div className="border-bordergray mx-[12rem] rounded-lg border">
      <h1 className="px-3 py-2 text-xl font-semibold">Tasks - July 15 2025</h1>
      <div className="border-bordergray mx-3 my-1 items-center rounded-lg border py-1">
        <div className="border-bordergray grid grid-cols-[5rem_23rem_15rem_15rem_10rem] border-b pt-1 pb-2">
          <div></div>
          <div className="text-lg font-semibold">Task</div>
          <div className="text-lg font-semibold"> Status</div>
          <div className="text-lg font-semibold">Priority</div>
          <div className="justify-self-end">
            <button className="rounded-lg bg-green-900 px-3 py-1 text-sm transition-all duration-300 hover:bg-green-950">
              Add Task
            </button>
          </div>
        </div>
        {/* This tasks items will be more than one */}
        <TaskItem task="Coding" priority="Medium" status="In Progress" />
      </div>
    </div>
  );
};

export default Tasks;
