import { Check, Edit, Trash } from "lucide-react";
import type { Task } from "shared/types";
import { useDeleteTask, useUpdateTask } from "../../api/tasks";
import { TaskDialog } from "../dialogs";
import { ButtonIcon } from "../buttons";
import { formatDate } from "../../utils";
import Spinner from "../spinner";

const LinearTask: React.FC<Task> = (props) => {
  const { mutate: updateTask, isPending: isUpdating } = useUpdateTask();
  const { mutate: deleteTask, isPending: isDeleting } = useDeleteTask();

  const updateTaskStatus = () => {
    updateTask({
      id: props.id,
      status: props.status === "done" ? "to-do" : "done",
    });
  };

  return (
    <div className="flex h-12 items-center gap-4 border-b lg:pr-4">
      <div className="flex min-w-0 items-center gap-3 lg:w-3/5">
        {isUpdating ? (
          <Spinner />
        ) : (
          <button className="h-4 w-4 flex-shrink-0" onClick={updateTaskStatus}>
            {props.status === "done" ? (
              <div className="flex h-full w-full items-center justify-center rounded-full bg-ok">
                <Check size={12} className="text-secondary" />
              </div>
            ) : (
              <div className="h-full w-full rounded-full border-2"></div>
            )}
          </button>
        )}
        <div className="flex items-center gap-2.5 overflow-hidden">
          <p className="truncate">{props.title}</p>
          <div className="h-4 border-r text-xs text-muted" />
          <p className="truncate text-muted">{props.description}</p>
        </div>
      </div>
      <p className="hidden font-normal lg:block">
        {formatDate(props.createdAt)}
      </p>
      <div className="flex flex-1 justify-end gap-1">
        <TaskDialog data={props} trigger={<ButtonIcon icon={Edit} />} />
        {isDeleting ? (
          <Spinner className="h-6 w-6" />
        ) : (
          <ButtonIcon icon={Trash} onClick={() => deleteTask(props.id)} />
        )}
      </div>
    </div>
  );
};

export default LinearTask;
