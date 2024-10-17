import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validateCreateTask, validateUpdateTask } from "shared/utils";
import type { Task, CreateTask, UpdateTask } from "shared/types";
import { useCreateTask, useUpdateTask } from "../../api/tasks";
import { Button } from "../buttons";
import Dialog, { type DialogProps } from "./dialog";
import Input from "../input";

interface TaskDialogProps {
  data?: Task;
  trigger: DialogProps["trigger"];
}

type FormFields = CreateTask | UpdateTask;

const TaskDialog: React.FC<TaskDialogProps> = ({ data, trigger }) => {
  const isEditing = !!data;

  const { mutateAsync: createTask } = useCreateTask();
  const { mutateAsync: updateTask } = useUpdateTask();
  const {
    formState: { errors, isDirty, isValid, isSubmitting },
    register,
    reset,
    handleSubmit,
  } = useForm<FormFields>({
    resolver: zodResolver(isEditing ? validateUpdateTask : validateCreateTask),
    values: data,
  });

  const onSubmit = async (values: FormFields) =>
    isEditing
      ? updateTask({ id: data.id, ...(values as UpdateTask) })
      : createTask(values as CreateTask);

  return (
    <Dialog
      title={isEditing ? "Edytuj zadanie" : "Dodaj zadanie"}
      subtitle="Wypełnij pola podane niżej."
      trigger={trigger}
    >
      {({ close }) => (
        <form
          onSubmit={async (event) => {
            await handleSubmit(onSubmit)(event);
            if (!isValid) return;
            if (!isEditing) reset();
            close();
          }}
        >
          <div className="flex flex-col gap-4">
            <Input
              label="Nazwa"
              placeholder="Wynieść śmieci"
              message={errors.title?.message}
              {...register("title")}
            />
            <Input
              label="Opis"
              placeholder="Wziąć worek i wynieść na zewnątrz"
              message={errors.description?.message}
              {...register("description")}
            />
          </div>
          <Button
            className="ml-auto mt-8 block"
            type="submit"
            disabled={!isDirty}
            isLoading={isSubmitting}
          >
            {isEditing ? "Aktualizuj" : "Dodaj"}
          </Button>
        </form>
      )}
    </Dialog>
  );
};

export default TaskDialog;
