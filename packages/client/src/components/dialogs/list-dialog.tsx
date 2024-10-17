import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validateCreateList, validateUpdateList } from "shared/utils";
import type { List, CreateList, UpdateList } from "shared/types";
import { useCreateList, useUpdateList } from "../../api/lists";
import { Button } from "../buttons";
import Dialog, { type DialogProps } from "./dialog";
import Input from "../input";
import { ROUTES } from "../../utils";

interface ListDialogProps {
  data?: List;
  trigger: DialogProps["trigger"];
}

type FormFields = CreateList | UpdateList;

const ListDialog: React.FC<ListDialogProps> = ({ data, trigger }) => {
  const isEditing = !!data;

  const navigate = useNavigate();
  const { mutateAsync: createList } = useCreateList({
    onSuccess: ({ data }) => navigate(ROUTES.LIST(data.id)),
  });
  const { mutateAsync: updateList } = useUpdateList();
  const {
    formState: { errors, isDirty, isValid, isSubmitting },
    register,
    reset,
    handleSubmit,
  } = useForm<FormFields>({
    resolver: zodResolver(isEditing ? validateUpdateList : validateCreateList),
    values: data,
  });

  const onSubmit = async (values: FormFields) =>
    isEditing ? updateList({ id: data.id, ...values }) : createList(values);

  return (
    <Dialog
      title={isEditing ? "Edytuj liste" : "Stwórz liste"}
      subtitle="Wypełnij pole podane niżej."
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
          <Input
            label="Nazwa"
            placeholder="Faang"
            message={errors.name?.message}
            {...register("name")}
          />
          <Button
            className="ml-auto mt-8 block"
            type="submit"
            disabled={!isDirty}
            isLoading={isSubmitting}
          >
            {isEditing ? "Aktualizuj" : "Stwórz"}
          </Button>
        </form>
      )}
    </Dialog>
  );
};

export default ListDialog;
