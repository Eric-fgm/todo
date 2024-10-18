import { Edit, Trash } from "lucide-react";
import type { Task } from "shared/types";
import { useDeleteTask, useUpdateTask } from "../../api/tasks";
import { TaskDialog } from "../dialogs";
import { ButtonIcon } from "../buttons";
import Spinner from "../spinner";
import { formatDate } from "../../utils";

type CardTaskProps = Task & { className?: string };

const CardTask: React.FC<CardTaskProps> = ({ className = "", ...props }) => {
  const { mutate: updateTask, isPending: isUpdating } = useUpdateTask();
  const { mutate: deleteTask, isPending: isDeleting } = useDeleteTask();

  const handleUpdateStatus = () => {
    updateTask({
      id: props.id,
      status: props.status === "done" ? "to-do" : "done",
    });
  };

  const handleDelete = () => deleteTask(props.id);

  return (
    <div
      className={`relative flex h-44 flex-col justify-between rounded-xl border px-6 py-5 ${className}`}
    >
      <button
        className={`block h-1 w-8 rounded-full ${props.status === "done" ? "bg-ok" : "bg-[#e0e0e0]"}`}
        disabled={isUpdating}
        onClick={handleUpdateStatus}
      />
      <div>
        <p className="mt-3 line-clamp-2">{props.title}</p>
        <p className="mt-1 line-clamp-2 font-normal">{props.description}</p>
      </div>
      <p className="mt-3 text-xs">{formatDate(props.createdAt)}</p>
      <div className="absolute right-3 top-3 flex gap-1">
        <TaskDialog data={props} trigger={<ButtonIcon icon={Edit} />} />
        {isDeleting ? (
          <Spinner className="h-6 w-6" />
        ) : (
          <ButtonIcon icon={Trash} onClick={handleDelete} />
        )}
      </div>
    </div>
  );
};

export default CardTask;
