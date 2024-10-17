import { useState } from "react";
import { useTasksQuery } from "../api/tasks";
import Toolbar from "./toolbar";
import TaskPlaceholder from "./task-placeholder";
import { LinearTask, CardTask } from "./tasks";
import Stack from "./stack";

const TasksView: React.FC = () => {
  const { tasks } = useTasksQuery();
  const [selectedStatus, setSelectedStatus] = useState("Wszystko");
  const [selectedView, setSelectedView] = useState("List");

  if (!tasks || !tasks.data.length) {
    return (
      <div className="pt-24">
        <TaskPlaceholder />
      </div>
    );
  }

  const filteredTasks = tasks.data.filter(
    (task) =>
      selectedStatus === "Wszystko" ||
      (selectedStatus === "Zrobione" && task.status === "done") ||
      (selectedStatus === "Todo" && task.status === "to-do"),
  );

  return (
    <div>
      <Toolbar
        selectedStatus={selectedStatus}
        selectedView={selectedView}
        onStatusSelect={setSelectedStatus}
        onViewSelect={setSelectedView}
      />
      <div className="mt-4">
        {selectedView === "List" ? (
          filteredTasks.map((task) => <LinearTask key={task.id} {...task} />)
        ) : (
          <Stack>
            {filteredTasks.map((task) => (
              <CardTask key={task.id} {...task} />
            ))}
          </Stack>
        )}
      </div>
    </div>
  );
};

export default TasksView;
