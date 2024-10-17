import type { List } from "shared/types";
import SidebarItem from "./sidebar-item";
import { ROUTES } from "../../utils";
import { ListDialog } from "../dialogs";
import { ButtonIcon } from "../buttons";
import { Edit, Trash } from "lucide-react";
import Spinner from "../spinner";
import { useDeleteList } from "../../api/lists";

const SidebarListItem: React.FC<List> = (props) => {
  const { mutate: deleteList, isPending: isDeleting } = useDeleteList();

  return (
    <div className="group relative">
      <SidebarItem
        key={props.id}
        to={ROUTES.LIST(props.id)}
        text={props.name}
        className="my-1"
      />
      <div className="absolute right-2 top-1.5 flex items-center gap-1 opacity-0 group-hover:opacity-100">
        <ListDialog data={props} trigger={<ButtonIcon icon={Edit} />} />
        {isDeleting ? (
          <Spinner className="h-6 w-6" />
        ) : (
          <ButtonIcon icon={Trash} onClick={() => deleteList(props.id)} />
        )}
      </div>
    </div>
  );
};

export default SidebarListItem;
