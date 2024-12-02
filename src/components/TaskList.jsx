import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TaskItem from "./TaskItem";
import { setFilter } from "../redux/taskSlice";
import { FaSearch, FaFilter } from "react-icons/fa";

const TaskList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const tasks = useSelector((state) => state.tasks.tasks || []);
  const filter = useSelector((state) => state.tasks.filter) || "all";
  const dispatch = useDispatch();

  const filteredTasks = tasks?.filter((task) => {
    const matchesSearchTerm =
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      filter === "all" ||
      (filter === "completed" && task.completed) ||
      (filter === "pending" && !task.completed);

    return matchesSearchTerm && matchesFilter;
  });

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center font-sans bg-gray-100 p-2 rounded-lg w-full">
        <div className="flex w-full">
          <FaSearch className="text-gray-500 mr-2 font-semibold" size={18} />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search tasks..."
            className="w-full bg-transparent border-none outline-none text-black placeholder-gray-500 text-sm"
          />
        </div>
        <div className="flex items-center">
          <FaFilter className="text-gray-500 mr-2 font-semibold" size={18} />
          <select
            value={filter}
            onChange={handleFilterChange}
            className="w-full bg-transparent border-none outline-none text-gray-700 text-sm p-2"
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>
        </div>
      </div>
      <div className="space-y-4">
        {filteredTasks.length === 0 ? (
          <p className="text-gray-500 font-semibold">No tasks found</p>
        ) : (
          filteredTasks.map((task) => <TaskItem key={task.id} task={task} />)
        )}
      </div>
    </div>
  );
};

export default TaskList;
