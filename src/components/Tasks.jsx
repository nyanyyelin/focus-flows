import NoTask from './NoTask';
import { RiExpandUpDownLine } from 'react-icons/ri';
import TaskItem from './TaskItem';
const Tasks = () => {
  return (
    <div className="border-bordergray mx-[12rem] w-[70rem] rounded-lg border">
      <h1 className="px-3 py-2 text-xl font-semibold">Tasks - July 15 2025</h1>
      <div className="border-bordergray mx-3 mt-1 mb-1.5 items-center rounded-lg border py-1">
        <div className="border-bordergray grid grid-cols-[5rem_20rem_10rem_10rem_15rem_8rem] border-b pt-0.5 pb-2">
          <div></div>
          <div className="text-lg font-semibold">Task</div>
          <div className="text-lg font-semibold">
            <button className="flex items-center gap-2 rounded-lg px-3 py-0.5 hover:bg-gray-800">
              Status
              <RiExpandUpDownLine />
            </button>
          </div>
          <div className="text-lg font-semibold">
            <button className="flex items-center gap-2 rounded-lg px-3 py-0.5 hover:bg-gray-800">
              Priority
              <RiExpandUpDownLine />
            </button>
          </div>
          <div className="text-lg font-semibold">
            <button className="flex items-center gap-2 rounded-lg px-3 py-0.5 hover:bg-gray-800">
              Due Date
              <RiExpandUpDownLine />
            </button>
          </div>
          <div className="justify-self-end">
            <button className="mx-1 rounded-lg bg-green-900 px-3 py-1 text-sm transition-all duration-300 hover:bg-green-950">
              Add Task
            </button>
          </div>
        </div>
        <TaskItem
          task="Coding"
          priority="Medium"
          status="In Progress"
          dueDate="07/31/2025"
          dueTime="11:59 PM"
        />
        <TaskItem
          task="UI Design"
          priority="Low"
          status="Incomplete"
          dueDate="08/01/2025"
          dueTime="11:59 PM"
        />
        <TaskItem
          task="LeetCode "
          priority="High"
          status="Completed"
          dueDate="07/29/2025"
          dueTime="11:59 PM"
        />
        {/* <NoTask /> */}
      </div>
    </div>
  );
};

export default Tasks;
